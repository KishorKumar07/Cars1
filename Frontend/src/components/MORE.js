import React from 'react';
import { useCallback } from "react";
import "./MORE.css";
const MORE = ({ onClose }) => {
  const onFAQTextClick = useCallback(() => {
    // Please sync "FAQ" to the project
  }, []);

  const onContactUSTextClick = useCallback(() => {
    // Please sync "Contact" to the project
  }, []);

  const onTermsTextClick = useCallback(() => {
    // Please sync "Terms" to the project
  }, []);

  const onPrivacyTextClick = useCallback(() => {
    // Please sync "Privacy" to the project
  }, []);

  const onOffersTextClick = useCallback(() => {
    // Please sync "Offers" to the project
  }, []);

  const onReviewsTextClick = useCallback(() => {
    // Please sync "Reviews" to the project
  }, []);

  return (
    <div className="more1">
      <div className="more-child" />
      <div className="faq-parent">
        <div className="faq" onClick={onFAQTextClick}>
          FAQ
        </div>
        <div className="faq" onClick={onContactUSTextClick}>
          Contact US
        </div>
        <div className="faq" onClick={onTermsTextClick}>
          Terms
        </div>
        <div className="faq" onClick={onPrivacyTextClick}>
          Privacy
        </div>
        <div className="faq" onClick={onOffersTextClick}>
          Offers
        </div>
        <div className="faq" onClick={onReviewsTextClick}>
          Reviews
        </div>
      </div>
      <img className="more-item" alt="" src="/undefined134.png" />
    </div>
  );
};

export default MORE;
