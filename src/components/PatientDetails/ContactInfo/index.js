import React from "react";
import { usePatientsContext } from "../../../contexts/PatientsContext";
import classes from "./styles.module.css";
import InfoRow from "./InfoRow";
import {
  BirthIcon,
  FemaleIcon,
  InsuranceIcon,
  MaleIcon,
  PhoneIcon,
} from "../../../assets/svgs";

const ContactInfo = () => {
  const { currentPatientData } = usePatientsContext();
  const {
    name,
    profile_picture,
    date_of_birth,
    gender,
    phone_number,
    emergency_contact,
    insurance_type,
  } = currentPatientData || {};
  const isFemale = gender === "Female";
  const birthDate = new Date(date_of_birth);
  const formattedBirthDate = birthDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return (
    <section className={classes.contactInfoContainer}>
      <div className="mb-2 text-center">
        <div className="mb-2">
          <img
            className={classes.profileImage}
            src={profile_picture}
            alt="patient-image"
          />
        </div>
        <div>
          <h3>{name}</h3>
        </div>
      </div>
      <div>
        <div className="mb-2">
          <InfoRow
            icon={BirthIcon}
            label="Date Of Birth"
            value={formattedBirthDate}
          />
        </div>
        <div className="mb-2">
          <InfoRow
            icon={isFemale ? FemaleIcon : MaleIcon}
            label="Gender"
            value={gender}
          />
        </div>

        <div className="mb-2">
          <InfoRow
            icon={PhoneIcon}
            label="Contact Info."
            value={phone_number}
          />
        </div>
        <div className="mb-2">
          <InfoRow
            icon={PhoneIcon}
            label="Emergency Contacts"
            value={emergency_contact}
          />
        </div>
        <div className="mb-2">
          <InfoRow
            icon={InsuranceIcon}
            label="Insurance Provider"
            value={insurance_type}
          />
        </div>
      </div>
      <div className="text-center mt-3">
        <button className={classes.infoButton}>Show All Information</button>
      </div>
    </section>
  );
};

export default ContactInfo;
