"use client";
import React, { useEffect, useState } from "react";
import { formSections, initialFormData } from "../constants/formQuestions";
import SectionA from "./SectionA";
import SectionB from "./SectionB";
import SectionC from "./SectionC";
import SectionD from "./SectionD";
import Submitted from "./Submitted";

const MultiStepForm = () => {
  const [formSection, setFormSection] = useState("A");

  const [formData, setFormData] = useState(initialFormData);

  const handleNext = () => {
    if (formSection === "A") setFormSection("B");
    else if (formSection === "B") setFormSection("C");
    else if (formSection === "C") setFormSection("D");
  };

  const handlePrevious = () => {
    if (formSection === "D") setFormSection("C");
    else if (formSection === "C") setFormSection("B");
    else if (formSection === "B") setFormSection("A");
  };

  const handleFormInput = (e: React.FormEvent<HTMLInputElement>) => {
    const field = e.currentTarget.value;
    let fieldValue;
    if (field === "terms") {
      fieldValue = e.currentTarget.checked;
    } else {
      fieldValue = e.currentTarget.value;
    }
    setFormData({
      ...formData,
      [field]: fieldValue,
    });
  };

  const handleSubmit = () => {
    if (!formData.terms) {
      alert(
        "Please read and accept the Terms and Conditions before proceeding with the rehoming process."
      );
    } else {
      setFormSection("Submitted");
    }
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const renderFormSectionHeader = () => {
    if (formSection === "Submitted") {
      return null;
    } else {
      return (
        <div className="flex justify-between">
          {formSections.map((item) => (
            <div
              key={item.section}
              className={`basis-1/4 min-h-fit p-10 flex justify-center items-center text-center rounded-t-lg font-poppins font-semibold cursor-pointer hover:bg-sky-100 ${
                item.section === formSection
                  ? "bg-sky-200 hover:bg-sky-200"
                  : ""
              }`}
              onClick={() => setFormSection(item.section)}
            >
              {item.section_title}
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <div className="flex flex-col justify-center w-4/5 rounded-xl mx-auto bg-white shadow-lg scale-[70%] lg:scale-[85%]">
      {renderFormSectionHeader()}

      {formSection === "A" ? (
        <SectionA
          formData={formData}
          handleFormInput={handleFormInput}
          handleNext={handleNext}
        />
      ) : null}
      {formSection === "B" ? (
        <SectionB
          formData={formData}
          handleFormInput={handleFormInput}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
        />
      ) : null}
      {formSection === "C" ? (
        <SectionC
          formData={formData}
          handleFormInput={handleFormInput}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
        />
      ) : null}
      {formSection === "D" ? (
        <SectionD
          formData={formData}
          handleFormInput={handleFormInput}
          handlePrevious={handlePrevious}
          handleSubmit={handleSubmit}
        />
      ) : null}
      {formSection === "Submitted" ? <Submitted /> : null}
    </div>
  );
};

export default MultiStepForm;
