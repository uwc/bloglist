import PropTypes from 'prop-types';
import ReactSelect from 'react-select';
import { colors, fonts } from '../styles';

const Select = props => (
  <div>
    <ReactSelect {...props} />
    <style jsx global>{`
      /**
       * React Select
       * ============
       * Created by Jed Watson and Joss Mackison for KeystoneJS, http://www.keystonejs.com/
       * https://twitter.com/jedwatson https://twitter.com/jossmackison https://twitter.com/keystonejs
       * MIT License: https://github.com/JedWatson/react-select
      */
      .Select {
        position: relative;
        font-size: ${fonts.size.t1};
      }
      .Select,
      .Select div,
      .Select input,
      .Select span {
        box-sizing: border-box;
      }
      .Select.is-disabled > .Select-control {
        background-color: #f9f9f9;
      }
      .Select.is-disabled > .Select-control:hover {
        box-shadow: none;
      }
      .Select.is-disabled .Select-arrow-zone {
        cursor: default;
        pointer-events: none;
        opacity: 0.35;
      }
      .Select-control {
        background-color: #fff;
        border: 0;
        color: #333;
        cursor: default;
        display: table;
        height: 36px;
        outline: none;
        overflow: hidden;
        position: relative;
        width: 100%;
      }
      .Select-control .Select-input:focus {
        outline: none;
      }
      .is-searchable.is-open > .Select-control {
        cursor: text;
      }
      .is-open > .Select-control {
        background: #fff;
      }
      .is-open > .Select-control .Select-arrow {
        top: -2px;
        border-color: transparent transparent #999;
        border-width: 0 5px 5px;
      }
      .is-searchable.is-focused:not(.is-open) > .Select-control {
        cursor: text;
      }
      .Select-placeholder,
      .Select--single > .Select-control .Select-value {
        bottom: 0;
        color: #757575;
        left: 0;
        line-height: 34px;
        padding-left: 0;
        padding-right: 10px;
        position: absolute;
        right: 0;
        top: 0;
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .has-value.is-clearable.Select--single > .Select-control .Select-value {
        padding-right: 42px;
      }
      .has-value.Select--single
        > .Select-control
        .Select-value
        .Select-value-label,
      .has-value.is-pseudo-focused.Select--single
        > .Select-control
        .Select-value
        .Select-value-label {
        color: #333;
      }
      .has-value.Select--single
        > .Select-control
        .Select-value
        a.Select-value-label,
      .has-value.is-pseudo-focused.Select--single
        > .Select-control
        .Select-value
        a.Select-value-label {
        cursor: pointer;
        text-decoration: none;
      }
      .has-value.Select--single
        > .Select-control
        .Select-value
        a.Select-value-label:hover,
      .has-value.is-pseudo-focused.Select--single
        > .Select-control
        .Select-value
        a.Select-value-label:hover,
      .has-value.Select--single
        > .Select-control
        .Select-value
        a.Select-value-label:focus,
      .has-value.is-pseudo-focused.Select--single
        > .Select-control
        .Select-value
        a.Select-value-label:focus {
        color: ${colors.primary};
        outline: none;
        text-decoration: underline;
      }
      .Select-input {
        height: 34px;
        padding-left: 0;
        padding-right: 10px;
        vertical-align: middle;
      }
      .Select-input > input {
        width: 100%;
        background: none transparent;
        border: 0 none;
        box-shadow: none;
        cursor: default;
        display: inline-block;
        font-family: inherit;
        font-size: inherit;
        margin: 0;
        outline: none;
        line-height: 14px;
        /* For IE 8 compatibility */
        padding: 0px 0 12px;
        /* For IE 8 compatibility */
        -webkit-appearance: none;
      }
      .is-focused .Select-input > input {
        cursor: text;
      }
      .has-value.is-pseudo-focused .Select-input {
        opacity: 0;
      }
      .Select-control:not(.is-searchable) > .Select-input {
        outline: none;
      }
      .Select-loading-zone {
        cursor: pointer;
        display: table-cell;
        position: relative;
        text-align: center;
        vertical-align: middle;
        width: 16px;
      }
      .Select-loading {
        -webkit-animation: Select-animation-spin 400ms infinite linear;
        -o-animation: Select-animation-spin 400ms infinite linear;
        animation: Select-animation-spin 400ms infinite linear;
        width: 16px;
        height: 16px;
        box-sizing: border-box;
        border-radius: 50%;
        border: 2px solid #ccc;
        border-right-color: #333;
        display: inline-block;
        position: relative;
        vertical-align: middle;
      }
      .Select-clear-zone {
        -webkit-animation: Select-animation-fadeIn 200ms;
        -o-animation: Select-animation-fadeIn 200ms;
        animation: Select-animation-fadeIn 200ms;
        color: #999;
        cursor: pointer;
        display: table-cell;
        position: relative;
        text-align: center;
        vertical-align: middle;
        width: 17px;
      }
      .Select-clear-zone:hover {
        color: #d0021b;
      }
      .Select-clear {
        display: inline-block;
        font-size: 18px;
        line-height: 1;
      }
      .Select--multi .Select-clear-zone {
        width: 17px;
      }
      .Select-arrow-zone {
        cursor: pointer;
        display: table-cell;
        position: relative;
        text-align: center;
        vertical-align: middle;
        width: 25px;
        padding-right: 5px;
      }
      .Select-arrow {
        border-color: #999 transparent transparent;
        border-style: solid;
        border-width: 5px 5px 2.5px;
        display: inline-block;
        height: 0;
        width: 0;
        position: relative;
      }
      .is-open .Select-arrow,
      .Select-arrow-zone:hover > .Select-arrow {
        border-top-color: #666;
      }
      .Select--multi .Select-multi-value-wrapper {
        display: inline-block;
      }
      .Select .Select-aria-only {
        display: inline-block;
        height: 1px;
        width: 1px;
        margin: -1px;
        clip: rect(0, 0, 0, 0);
        overflow: hidden;
        float: left;
      }
      @-webkit-keyframes Select-animation-fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      @keyframes Select-animation-fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      .Select-menu-outer {
        border-bottom-right-radius: 2px;
        border-bottom-left-radius: 2px;
        background-color: #fff;
        border: 1px solid ${colors.gray[4]};
        border-top-color: ${colors.gray[2]};
        box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
        box-sizing: border-box;
        margin-top: -1px;
        max-height: 200px;
        position: absolute;
        top: 100%;
        width: 100%;
        z-index: 1;
        -webkit-overflow-scrolling: touch;
      }
      .Select-menu {
        max-height: 198px;
        overflow-y: auto;
      }
      .Select-option {
        box-sizing: border-box;
        background-color: #fff;
        color: #666666;
        cursor: pointer;
        display: block;
        padding: 8px 10px;
      }
      .Select-option:last-child {
        border-bottom-right-radius: 4px;
        border-bottom-left-radius: 4px;
      }
      .Select-option.is-selected {
        background-color: #edf9fd;
        /* Fallback color for IE 8 */
        background-color: rgba(0, 126, 255, 0.04);
        color: #333;
      }
      .Select-option.is-focused {
        background-color: #edf9fd;
        /* Fallback color for IE 8 */
        background-color: rgba(0, 126, 255, 0.08);
        color: #333;
      }
      .Select-option.is-disabled {
        color: #cccccc;
        cursor: default;
      }
      .Select-noresults {
        box-sizing: border-box;
        color: #999999;
        cursor: default;
        display: block;
        padding: 8px 10px;
      }
      .Select--multi .Select-input {
        vertical-align: middle;
        margin-left: 0;
        padding: 0;
      }
      .Select--multi.has-value .Select-input {
        margin-left: 5px;
      }
      .Select--multi .Select-value {
        background-color: #edf9fd;
        /* Fallback color for IE 8 */
        background-color: rgba(0, 126, 255, 0.08);
        border-radius: 2px;
        border: 1px solid #c9eef8;
        /* Fallback color for IE 8 */
        border: 1px solid #5ccceb;
        color: ${colors.primary};
        display: inline-block;
        font-size: 0.9em;
        line-height: 1.4;
        margin-right: 5px;
        margin-bottom: 5px;
        vertical-align: top;
      }
      .Select--multi .Select-value-icon,
      .Select--multi .Select-value-label {
        display: inline-block;
        vertical-align: middle;
      }
      .Select--multi .Select-value-label {
        border-bottom-right-radius: 2px;
        border-top-right-radius: 2px;
        cursor: default;
        padding: 2px 5px;
      }
      .Select--multi a.Select-value-label {
        color: ${colors.primary};
        cursor: pointer;
        text-decoration: none;
      }
      .Select--multi a.Select-value-label:hover {
        text-decoration: underline;
      }
      .Select--multi .Select-value-icon {
        cursor: pointer;
        border-bottom-left-radius: 2px;
        border-top-left-radius: 2px;
        border-right: 1px solid #c9eef8;
        /* Fallback color for IE 8 */
        border-right: 1px solid #5ccceb;
        padding: 1px 5px 3px;
      }
      .Select--multi .Select-value-icon:hover,
      .Select--multi .Select-value-icon:focus {
        background-color: #d8eafd;
        /* Fallback color for IE 8 */
        background-color: rgba(0, 113, 230, 0.08);
        color: #19a2c8;
      }
      .Select--multi .Select-value-icon:active {
        background-color: #c9eef8;
        /* Fallback color for IE 8 */
        background-color: #5ccceb;
      }
      .Select--multi.is-disabled .Select-value {
        background-color: #fcfcfc;
        border: 1px solid #e3e3e3;
        color: #333;
      }
      .Select--multi.is-disabled .Select-value-icon {
        cursor: not-allowed;
        border-right: 1px solid #e3e3e3;
      }
      .Select--multi.is-disabled .Select-value-icon:hover,
      .Select--multi.is-disabled .Select-value-icon:focus,
      .Select--multi.is-disabled .Select-value-icon:active {
        background-color: #fcfcfc;
      }
      @keyframes Select-animation-spin {
        to {
          transform: rotate(1turn);
        }
      }
      @-webkit-keyframes Select-animation-spin {
        to {
          -webkit-transform: rotate(1turn);
        }
      }
    `}</style>
  </div>
);

Select.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  required: PropTypes.bool,
  disabled: PropTypes.bool
};

Select.defaultProps = {
  value: '',
  placeholder: '',
  required: false,
  disabled: false,
  valid: true
};

export default Select;