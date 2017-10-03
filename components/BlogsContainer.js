import { Component } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import fetch from 'isomorphic-fetch';
import smoothScroll from 'smoothscroll';
import Input from './Input';
import Spinner from './Spinner';
import Blogs from './Blogs';

export default class BlogsContainer extends Component {
  static propTypes = {
    blogs: PropTypes.arrayOf(PropTypes.object)
  };

  constructor(props) {
    super(props);
    let search = '';
    if (typeof window !== 'undefined') {
      const hash = queryString.parse(location.hash);
      search = hash.search;
    }
    this.state = {
      search,
      loading: false,
      blogs: props.blogs
    };
  }

  setHash = value => {
    if (typeof window === 'undefined') {
      return;
    }
    const oldHash = queryString.parse(location.hash);
    const newHash = { ...oldHash, search: value };

    if (newHash.search !== '') {
      location.hash = queryString.stringify(newHash);
    } else {
      // Remove trailing # to prevent scrolling
      history.replaceState(
        '',
        document.title,
        location.pathname + location.search
      );
    }
  };

  handleSearch = async e => {
    if (typeof window === 'undefined') {
      return;
    }
    e.persist();
    const { value: search } = e.target;
    this.setState(() => ({ search, loading: true }));
    this.setHash(search);

    const { origin: siteUrl } = window.location;
    const blogs = await fetch(
      `${siteUrl}/api/blogs?search=${search}`
    ).then(resp => resp.json());
    this.setState(() => ({ blogs, loading: false }));
  };

  handleFocus = e => {
    smoothScroll(e.target);
  };

  render() {
    const { search, loading, blogs } = this.state;
    return (
      <article className="l-ctnr cf">
        <div className="l-w100">
          <Input
            label="Enter a college, year, country, language, or name:"
            name="search"
            type="search"
            value={search}
            placeholder="Type to filter the blogs..."
            onChange={this.handleSearch}
            onFocus={this.handleFocus}
            autoComplete={false}
            required
          />
          <Spinner active={loading} />
          <Blogs blogs={blogs} />
          <style jsx>{`
            article {
              margin-top: 2rem;
              margin-bottom: 2rem;
            }
          `}</style>
        </div>
      </article>
    );
  }
}
