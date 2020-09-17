import React from "react";
import Sect from "../../component/flexer/flexer";
import "./sides.scss";

function Side() {
  return (
    <React.Fragment>
      <div className="side">
        <Sect
          styleClas="side-1"
          head="Payday loans"
          image="./images/11.png"
          inner="Access quick and affordable personal and business loans as low as 1.8% monthly.
        Loan Type: Personal, Household, Education, HealthCare, Micro Business, Agriculture, Others"
        />
        <Sect
          styleClas="side-2"
          head="Thrift Savings"
          image="./images/22.png"
          inner="Access quick and affordable personal and business loans as low as 1.8% monthly.
        Loan Type: Personal, Household, Education, HealthCare, Micro Business, Agriculture, Others"
        />
        <Sect
          styleClas="side-1"
          head="Investment Savings"
          image="./images/33.png"
          inner="Access quick and affordable personal and business loans as low as 1.8% monthly.
        Loan Type: Personal, Household, Education, HealthCare, Micro Business, Agriculture, Others"
        />
        <Sect
          styleClas="side-2"
          head="Agency Banking"
          image="./images/44.png"
          inner="Access quick and affordable personal and business loans as low as 1.8% monthly.
        Loan Type: Personal, Household, Education, HealthCare, Micro Business, Agriculture, Others"
        />
      </div>
    </React.Fragment>
  );
}

export default Side;
