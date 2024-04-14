export default function JobFormFeature() {
  return (
    <div className="form-wrapper">
      <span className="form-title">Job Application Form</span>
      <form>
        <fieldset className="form-question">
          <legend className="form-description-text">What department do you want to work for?</legend>
          <div className="form-option-wrapper">
            <input type="radio" name="department" value="sales" id="departmentSales"/>
            <label htmlFor="departmentSales" className="form-option-text">Sales</label>
          </div>
          <div className="form-option-wrapper">
            <input type="radio" name="department" value="marketing" id="departmentMarketing"/>
            <label htmlFor="departmentMarketing" className="form-option-text">Marketing</label>
          </div>
          <div className="form-option-wrapper">
            <input type="radio" name="department" value="accounting" id="departmentAccounting"/>
            <label htmlFor="departmentAccounting" className="form-option-text">Accounting</label>
          </div>
          <div className="form-option-wrapper">
            <input type="radio" name="department" value="customer-service" id="departmentCustomerService"/>
            <label htmlFor="departmentCustomerService" className="form-option-text">Customer Service</label>
          </div>
        </fieldset>
        <fieldset className="form-question">
          <legend className="form-description-text">Why do you want to join this company?</legend>
          <div className="form-option-wrapper">
            <input type="radio" name="purpose" value="money" id="purposeMoney"/>
            <label htmlFor="purposeMoney" className="form-option-text">I want money!</label>
          </div>
          <div className="form-option-wrapper">
            <input type="radio" name="purpose" value="love-company" id="purposeLoveCompany"/>
            <label htmlFor="purposeLoveCompany" className="form-option-text">I love this company!</label>
          </div>
          <div className="form-option-wrapper">
            <input type="radio" name="purpose" value="learn" id="purposeLearn"/>
            <label htmlFor="purposeLearn" className="form-option-text">I want to learn</label>
          </div>
          <div className="form-option-wrapper">
            <input type="radio" name="purpose" value="dont-know-why" id="purposeDontKnowWhy"/>
            <label htmlFor="purposeDontKnowWhy" className="form-option-text">I don&apos;t know why</label>
          </div>
        </fieldset>
        <div className="form-question">
          <label htmlFor="salary-select" className="form-description-text">Salary</label>
          <select id="salary-select" className="form-input">
            <option value="$50K" defaultChecked>$50K</option>
            <option value="$100K">$100K</option>
            <option value="$150K">$150K</option>
            <option value="$200K">$200K</option>
          </select>
        </div>
        <div className="form-question">
          <label htmlFor="introduceInput" className="form-description-text">Introduce yourself</label>
          <input type="text" className="form-input" id="introduceInput"/>
        </div>
        <div className="form-question">
          <label htmlFor="dreamsInput" className="form-description-text">Tell us what your dreams are</label>
          <textarea className="form-input h-24" id="dreamsInput"/>
        </div>
        <div className="form-question">
          <label htmlFor="emailInput" className="form-description-text">Email</label>
          <input type="email" className="form-input" id="emailInput"/>
        </div>
        <button type="submit" className="form-submit-button">Give me this job</button>
      </form>
    </div>
  );
}
