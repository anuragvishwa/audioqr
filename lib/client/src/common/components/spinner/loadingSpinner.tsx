import * as React from "react";
import "./loadingSpinner.css";
import { promiseTrackerHoc } from "react-promise-tracker";
import { RingLoader } from "react-spinners";

interface myProps {
  trackedPromiseInProgress?: boolean;
}

const InnerLoadingSpinerComponent: React.StatelessComponent<myProps> = (
  props: myProps
) => {
  if (props.trackedPromiseInProgress === true) {
    return (
      <div className="loading">
        <RingLoader loading={props.trackedPromiseInProgress} />
      </div>
    );
  } else {
    return null;
  }
};

export const LoadingSpinnerComponent = promiseTrackerHoc(
  InnerLoadingSpinerComponent
);
