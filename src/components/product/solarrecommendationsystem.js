import React, { useState, useEffect } from 'react';
import { Sun, BarChart, Home, AlertTriangle } from 'lucide-react';

const SolarRecommendationSystem = () => {
  const [inputs, setInputs] = useState({
    tariffRate: 10,
    monthlyBill: 1000,
    availableArea: 1000,
    sanctionLoad: 5,
    powerPhase: 'Single',
    location: 'Average',
  });

  const [results, setResults] = useState({
    recommendedCapacity: 0,
    requiredAreaSqft: 0,
    requiredAreaSqm: 0,
    monthlyGeneration: 0,
    annualSavings: 0,
    breakEvenMonths: 0,
    co2Reduction: 0,
  });

  const [showReport, setShowReport] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});

  const locationFactors = {
    'Poor': 0.8,
    'Average': 1.0,
    'Excellent': 1.2,
  };

  const validateInputs = () => {
    const errors = {};
    if (inputs.tariffRate <= 0) errors.tariffRate = "Must be greater than 0";
    if (inputs.monthlyBill <= 0) errors.monthlyBill = "Must be greater than 0";
    if (inputs.availableArea <= 0) errors.availableArea = "Must be greater than 0";
    if (inputs.sanctionLoad <= 0) errors.sanctionLoad = "Must be greater than 0";
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const runCalculations = () => {
    if (!validateInputs()) return;

    const { tariffRate, monthlyBill, availableArea, sanctionLoad, powerPhase, location } = inputs;

    const monthlyConsumption = monthlyBill / tariffRate;
    let recommendedCapacity = monthlyConsumption / 120;

    const locationFactor = locationFactors[location];
    recommendedCapacity = recommendedCapacity / locationFactor;

    const maxCapacityByArea = availableArea / 100;
    const maxAllowedCapacity = powerPhase === 'Single' ? 10 : 100;
    recommendedCapacity = Math.min(recommendedCapacity, maxCapacityByArea, sanctionLoad, maxAllowedCapacity);

    const requiredAreaSqft = recommendedCapacity * 100;
    const requiredAreaSqm = requiredAreaSqft / 10.7639;
    const monthlyGeneration = recommendedCapacity * 120 * locationFactor;
    const annualSavings = monthlyGeneration * 12 * tariffRate;
    const installationCost = recommendedCapacity * 70000;
    const breakEvenMonths = Math.ceil(installationCost / (annualSavings / 12));
    const co2Reduction = monthlyGeneration * 12 * 0.82;

    setResults({
      recommendedCapacity: recommendedCapacity.toFixed(2),
      requiredAreaSqft: requiredAreaSqft.toFixed(1),
      requiredAreaSqm: requiredAreaSqm.toFixed(1),
      monthlyGeneration: monthlyGeneration.toFixed(0),
      annualSavings: annualSavings.toFixed(0),
      breakEvenMonths: breakEvenMonths,
      co2Reduction: co2Reduction.toFixed(0),
    });

    setShowReport(true);
  };

  const formatNumber = (num) => {
    return parseInt(num).toLocaleString('en-IN');
  };

  useEffect(() => {
    if (showReport) setValidationErrors({});
  }, [showReport]);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', fontFamily: 'sans-serif', padding: '1rem' }}>
      <style>
        {`
          .section-header {
            background: linear-gradient(to right, #2563eb, #22c55e);
            color: white;
            padding: 1.5rem;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
          }
          .section-body {
            background: white;
            padding: 1.5rem;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            margin-bottom: 1.5rem;
          }
          .input-group {
            margin-bottom: 1rem;
          }
          .input-label {
            display: block;
            margin-bottom: 0.25rem;
            font-size: 0.9rem;
            font-weight: 500;
            color: #333;
          }
          .input-field {
            width: 100%;
            box-sizing: border-box;
            padding: 0.5rem;
            border-radius: 5px;
            border: 1px solid #ccc;
            font-size: 0.9rem;
            appearance: none;
          }
          .error {
            color: red;
            font-size: 0.75rem;
            margin-left: 0.5rem;
          }
          .button {
            background-color: #2563eb;
            color: white;
            padding: 0.6rem 1.5rem;
            font-weight: 500;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            transition: background-color 0.3s;
          }
          .button:hover {
            background-color: #1e40af;
          }
          .report-section {
            background: linear-gradient(to right, #f0fdf4, #eff6ff);
            padding: 1.5rem;
            border-radius: 10px;
            
            box-shadow: 0 0 8px rgba(0,0,0,0.1);
          }
          .card {
            padding: 1rem;
            border-radius: 10px;
            box-shadow: 0 0 5px rgba(0,0,0,0.08);
            background: linear-gradient(248deg,rgba(196, 196, 196, 1) 0%, rgba(237, 255, 255, 1) 35%);

          }
          .card-title {
            font-weight: bold;
            margin-bottom: 0.75rem;
                        padding-bottom: 0.05rem;

          }
          .info-line {
            display: flex;
            justify-content: space-between;
            margin-bottom: 0.5rem;
          }
          .note {
            font-size: 0.85rem;
            color: gray;
            border-top: 1px solid #ddd;
            padding-top: 0.5rem;
            display: flex;
            align-items: center;
            margin-top: 1.5rem;
          }
        `}
      </style>

      <div className="section-header">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Solar Recommendation Calculator</h2>
            <p>Estimate your solar potential and savings</p>
          </div>
          <Sun size={40} color="white" />
        </div>
      </div>

      <div className="section-body" style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
        {/* Left Side: Form */}
        <div style={{ flex: '1 1 50%' }}>
          <div className="card">
            <h4 className="card-title" style={{ marginBottom: '1rem', color: '#1d4ed8' }}>Input Details</h4>

            <div className="input-group">
              <label className="input-label">Power Supply Phase</label>
              <select
                value={inputs.powerPhase}
                onChange={(e) => setInputs({ ...inputs, powerPhase: e.target.value })}
                className="input-field"
              >
                <option value="Single">Single Phase</option>
                <option value="Three">Three Phase</option>
              </select>
            </div>

            <div className="input-group">
              <label className="input-label">Location Solar Potential</label>
              <select
                value={inputs.location}
                onChange={(e) => setInputs({ ...inputs, location: e.target.value })}
                className="input-field"
              >
                <option value="Poor">Poor (Cloudy/Northern regions)</option>
                <option value="Average">Average (Most regions)</option>
                <option value="Excellent">Excellent (Sunny/Southern regions)</option>
              </select>
            </div>

            <div className="input-group">
              <label className="input-label">
                Tariff Rate (₹/kWh)
                {validationErrors.tariffRate && <span className="error">{validationErrors.tariffRate}</span>}
              </label>
              <input
                type="number"
                value={inputs.tariffRate}
                onChange={(e) => setInputs({ ...inputs, tariffRate: parseFloat(e.target.value) || 0 })}
                className="input-field"
              />
            </div>

            <div className="input-group">
              <label className="input-label">
                Monthly Electricity Bill (₹)
                {validationErrors.monthlyBill && <span className="error">{validationErrors.monthlyBill}</span>}
              </label>
              <input
                type="number"
                value={inputs.monthlyBill}
                onChange={(e) => setInputs({ ...inputs, monthlyBill: parseFloat(e.target.value) || 0 })}
                className="input-field"
              />
            </div>

            <div className="input-group">
              <label className="input-label">
                Available Roof Area (Sq.ft)
                {validationErrors.availableArea && <span className="error">{validationErrors.availableArea}</span>}
              </label>
              <input
                type="number"
                value={inputs.availableArea}
                onChange={(e) => setInputs({ ...inputs, availableArea: parseFloat(e.target.value) || 0 })}
                className="input-field"
              />
            </div>

            <div className="input-group">
              <label className="input-label">
                Sanction Load (kW)
                {validationErrors.sanctionLoad && <span className="error">{validationErrors.sanctionLoad}</span>}
              </label>
              <input
                type="number"
                value={inputs.sanctionLoad}
                onChange={(e) => setInputs({ ...inputs, sanctionLoad: parseFloat(e.target.value) || 0 })}
                className="input-field"
              />
            </div>

            <div style={{ marginTop: '1.5rem' }}>
              <button onClick={runCalculations} className="button">
                <BarChart size={18} style={{ marginRight: '0.5rem' }} />
                Generate Recommendation
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Image or Report */}
        <div style={{ flex: '1 1 45%' }}>
          {!showReport ? (
            <img
              src="https://res.cloudinary.com/du0cxgoic/image/upload/v1745911368/samples/man-on-a-escalator.jpg"
              alt="Solar Panel Preview"
              style={{ width: '100%', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}
            />
          ) : (
            <div className="report-section">
              <h3 style={{ fontWeight: 'bold', fontSize: '1.25rem', marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                <Sun size={24} color="#facc15" style={{ marginRight: '0.5rem' }} />
                Your Solar Recommendation
              </h3>

              <div className="card">
                <h4 className="card-title" style={{ color: '#15803d' }}>System Details</h4>
                <div className="info-line"><span>Recommended Capacity:</span><span>{results.recommendedCapacity} kWp</span></div>
                <div className="info-line"><span>Required Area:</span><span>{results.requiredAreaSqft} sq.ft / {results.requiredAreaSqm} sq.m</span></div>
                <div className="info-line"><span>Monthly Generation:</span><span>{formatNumber(results.monthlyGeneration)} kWh</span></div>
              </div>

              <div className="card" style={{ marginTop: '0.5rem' }}>
                <h4 className="card-title" style={{ color: '#1d4ed8' }}>Financial Benefits</h4>
                <div className="info-line"><span>Annual Savings:</span><span style={{ color: '#16a34a', fontWeight: 'bold' }}>₹ {formatNumber(results.annualSavings)}</span></div>
                <div className="info-line"><span>Estimated Cost:</span><span>₹ {formatNumber(parseFloat(results.recommendedCapacity) * 70000)}</span></div>
                <div className="info-line"><span>Break-even Period:</span><span>{Math.floor(results.breakEvenMonths / 12)} years, {results.breakEvenMonths % 12} months</span></div>
              </div>

              <div className="card" style={{ marginTop: '0.5rem' }}>
                <h4 className="card-title" style={{ color: '#0f766e' }}>Environmental Impact</h4>
                <div className="info-line"><span>Annual CO₂ Reduction:</span><span>{formatNumber(results.co2Reduction)} kg</span></div>
                <div className="info-line" style={{ color: '#666', marginTop: '0.5rem', alignItems: 'center', display: 'flex' }}>
                  <AlertTriangle size={16} color="#facc15" style={{ marginRight: '0.5rem' }} />
                  <small>Equivalent to planting {Math.round(parseFloat(results.co2Reduction) / 20)} trees per year</small>
                </div>
              </div>

              <div className="note">
                <Home size={16} style={{ marginRight: '0.5rem' }} />
                *Actual results may vary based on site conditions, installation quality, and seasonal variations.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SolarRecommendationSystem;
