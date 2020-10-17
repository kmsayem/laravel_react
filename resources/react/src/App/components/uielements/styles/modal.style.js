import styled from "styled-components";
import { palette } from "styled-theme";
import {
  transition,
  borderRadius
} from "@/settings/style-util";

const ModalWrapper = ComponentName => styled(ComponentName)`
  &.ant-modal {
    .ant-modal-header {
      background: ${palette("primary", 0)};
      padding: 20px 30px;
    }
    .ant-modal-title {
      color: #fff;
      font-weight: 200;
      line-height: 15px;
    }
    .ant-modal-close {
      color: #fff;
      height: 56px;
    }
    .ant-modal-body {
      padding: 30px;
    }
    .ant-form-item {
      margin-bottom: 30px;
      .ant-form-item-control input {
        height: 45px;
        padding: 6px 10px;
        font-size: 14px;
        line-height: 1.5;
        color: ${palette("text", 0)};
        background-color: #fff;
        background-image: none;
        border: 1px solid ${palette("border", 0)};
        ${borderRadius("4px")};
        ${transition()};
      }
      .ant-select-selection--single {
        height: 44px !important;
        .ant-select-selection__rendered {
          line-height: 40px;
          .ant-select-selection-selected-value {
            color: ${palette("text", 0)};
          }
        }
      }
      .has-error .ant-form-explain,
      .has-error .ant-form-split {
        margin-top: 1px;
      }
      .ant-form-item-label > label::before {
        display: none;
        content: "";
      }
      .ant-form-item-label > label::after {
        display: none;
        content: "";
      }
      .ant-form-item-label > label.ant-form-item-required::after {
        margin-left: 4px;
        display: inline-block;
        color: #f5222d;
        font-size: 14px;
        font-family: SimSun, sans-serif;
        line-height: 1;
        content: "*";
      }
    }
    .formWithlable {
      .ant-form-item {
        margin-bottom: 20px;
      }
      .ant-form-item-label {
        line-height: 30px;
      }
    }
    .footer-btn {
      padding-top: 10px;
      margin-bottom: 15px;
      display: flex;
      button:first-child {
        margin-right: 15px;
      }
    }
  }
`;

export default ModalWrapper;
