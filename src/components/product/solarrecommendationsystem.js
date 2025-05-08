import React, { useState, useEffect } from 'react';
import { 
  Sun, 
  BarChart, 
  Home, 
  AlertTriangle, 
  Zap, 
  ChevronDown,
  ChevronUp,
  IndianRupee
} from 'lucide-react';

// Constants
const SYSTEM_TYPES = {
  GRID_TIE: 'Grid-Tie',
  OFF_GRID: 'Off-Grid'
};

const PHASE_TYPES = {
  SINGLE: 'Single',
  THREE: 'Three'
};

const CALCULATION_METHODS = {
  BILL: 'bill',
  AREA: 'area'
};

// Tata Power Solar Solutions Data
const gridTieData = [
    {
      capacity: 1.28,
      roofArea: '100–200 Sq. Ft.',
      solution: 'TATA POWER SOLAR SOLUTION 1',
      inverter: '1 kVA Grid Tie Solar Inverter (Single Phase)',
      modules: '4 nos Modules of 320 Wp each',
      extras: 'Cables & Other Accessories',
      generation: 1400,
      cost: 80000,
      components: {
        panels: 60000,
        inverter: 15000,
        wiring: 3000,
        structure: 10000,
        installation: 10000
      }
    },
    {
      capacity: 2.24,
      roofArea: '200–300 Sq. Ft.',
      solution: 'TATA POWER SOLAR SOLUTION 2',
      inverter: '2 kVA Grid Tie Solar inverter (Single Phase)',
      modules: '7 nos Modules of 320 Wp each',
      extras: 'Cables & Other Accessories',
      generation: 2800,
      cost: 140000,
      components: {
        panels: 105000,
        inverter: 25000,
        wiring: 4000,
        structure: 15000,
        installation: 15000
      }
    },
    {
      capacity: 3.2,
      roofArea: '300–500 Sq. Ft.',
      solution: 'TATA POWER SOLAR SOLUTION 3',
      inverter: '3 kVA Grid Tie Solar Inverter (Single / Three Phase)',
      modules: '10 nos Modules of 320 Wp each',
      extras: 'Cables & Other Accessories',
      generation: 4200,
      cost: 200000,
      components: {
        panels: 150000,
        inverter: 35000,
        wiring: 5000,
        structure: 20000,
        installation: 20000
      }
    },
    {
      capacity: 5.12,
      roofArea: '500–700 Sq. Ft.',
      solution: 'TATA POWER SOLAR SOLUTION 4',
      inverter: '5 kVA Grid Tie Solar Inverter (Single / Three Phase)',
      modules: '16 nos Modules of 320 Wp each',
      extras: 'Cables & Other Accessories',
      generation: 7000,
      cost: 320000,
      components: {
        panels: 240000,
        inverter: 55000,
        wiring: 7000,
        structure: 30000,
        installation: 30000
      }
    },
    {
      capacity: 7.68,
      roofArea: '700–1,000 Sq. Ft.',
      solution: 'TATA POWER SOLAR SOLUTION 5',
      inverter: '8 kVA Grid Tie Solar Inverter (Three Phase)',
      modules: '24 nos Modules of 320 Wp each',
      extras: 'Cables & Other Accessories',
      generation: 8400,
      cost: 480000,
      components: {
        panels: 360000,
        inverter: 85000,
        wiring: 10000,
        structure: 45000,
        installation: 40000
      }
    },
    {
      capacity: 10.24,
      roofArea: '1,000–1,200 Sq. Ft.',
      solution: 'TATA POWER SOLAR SOLUTION 6',
      inverter: '10 kVA Grid Tie Solar Inverter (Three Phase)',
      modules: '32 nos Modules of 320 Wp each',
      extras: 'Cables & Other Accessories',
      generation: 14000,
      cost: 640000,
      components: {
        panels: 480000,
        inverter: 110000,
        wiring: 12000,
        structure: 60000,
        installation: 50000
      }
    }
  ];
  
  const offGridData = [
    {
      capacity: 1.28,
      roofArea: '100–200 Sq. Ft.',
      solution: 'TATA POWER SOLAR SOLUTION A',
      pcu: '2 kVA PCU (Single Phase)',
      modules: '4 nos Modules of 320 Wp each',
      batteries: '2 nos Batteries of 12 V / 150 Ah each',
      extras: 'Cables & Other Accessories',
      generation: 1400,
      cost: 120000,
      components: {
        panels: 60000,
        inverter: 25000,
        batteries: 20000,
        wiring: 5000,
        structure: 10000,
        installation: 15000
      }
    },
    {
      capacity: 1.92,
      roofArea: '200–300 Sq. Ft.',
      solution: 'TATA POWER SOLAR SOLUTION B',
      pcu: '3.75 kVA PCU (Single Phase)',
      modules: '6 nos Modules of 320 Wp each',
      batteries: '4 nos Batteries of 12 V / 150 Ah each',
      extras: 'Cables & Other Accessories',
      generation: 2600,
      cost: 180000,
      components: {
        panels: 90000,
        inverter: 40000,
        batteries: 40000,
        wiring: 6000,
        structure: 15000,
        installation: 20000
      }
    },
    {
      capacity: 3.84,
      roofArea: '300–500 Sq. Ft.',
      solution: 'TATA POWER SOLAR SOLUTION C',
      pcu: '6.25 kVA PCU (Single Phase)',
      modules: '12 nos Modules of 320 Wp each',
      batteries: '6 nos Batteries of 12 V / 150 Ah each',
      extras: 'Cables & Other Accessories',
      generation: 5000,
      cost: 300000,
      components: {
        panels: 180000,
        inverter: 70000,
        batteries: 60000,
        wiring: 8000,
        structure: 25000,
        installation: 30000
      }
    },
    {
      capacity: 5.12,
      roofArea: '500–700 Sq. Ft.',
      solution: 'TATA POWER SOLAR SOLUTION D',
      pcu: '7.5 kVA PCU (Single Phase)',
      modules: '16 nos Modules of 320 Wp each',
      batteries: '10 nos Batteries of 12 V / 150 Ah each',
      extras: 'Cables & Other Accessories',
      generation: 7000,
      cost: 420000,
      components: {
        panels: 240000,
        inverter: 90000,
        batteries: 100000,
        wiring: 10000,
        structure: 35000,
        installation: 40000
      }
    }
  ];
// Utility Functions
const formatNumber = (num) => parseInt(num).toLocaleString('en-IN');

const parseRoofArea = (areaStr) => {
  return areaStr.split('–').map(s => parseInt(s.replace(/[^\d]/g, '')) || 0);
};

// Components
const InputField = ({ label, name, value, onChange, type = 'text', placeholder, error, disabled = false }) => (
  <div className="input-group">
    <label className="input-label">
      {label}
      {error && <span className="error">{error}</span>}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="input-field"
      placeholder={placeholder}
      disabled={disabled}
    />
  </div>
);

const RadioGroup = ({ label, name, options, selectedValue, onChange }) => (
  <div className="input-group">
    <label className="input-label">{label}</label>
    <div className="radio-group">
      {options.map((option) => (
        <label key={option.value} className="radio-option">
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={onChange}
          />
          {option.label}
        </label>
      ))}
    </div>
  </div>
);

const Tab = ({ label, active, onClick }) => (
  <div className={`tab ${active ? 'active' : ''}`} onClick={onClick}>
    {label}
  </div>
);

const InfoLine = ({ label, value, highlight = false }) => (
  <div className="info-line">
    <span>{label}</span>
    <span style={highlight ? { color: '#16a34a', fontWeight: 'bold' } : {}}>
      {value}
    </span>
  </div>
);

const CostItem = ({ label, value }) => (
  <div className="cost-item">
    <span>{label}</span>
    <span>₹ {formatNumber(value)}</span>
  </div>
);

const SolarRecommendationSystem = () => {
  // State
  const [inputs, setInputs] = useState({
    powerPhase: PHASE_TYPES.SINGLE,
    monthlyBill: '',
    tariffRate: '',
    availableArea: '',
    systemType: SYSTEM_TYPES.GRID_TIE,
    calculationMethod: CALCULATION_METHODS.BILL
  });

  const [results, setResults] = useState({
    recommendedCapacity: 0,
    requiredArea: '',
    monthlyGeneration: 0,
    annualSavings: 0,
    breakEvenMonths: 0,
    co2Reduction: 0,
    recommendedSolution: null,
    costBreakdown: {},
    calculationMethod: CALCULATION_METHODS.BILL
  });

  const [showReport, setShowReport] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const [expandedSections, setExpandedSections] = useState({
    systemDetails: true,
    costEstimate: true,
    financialBenefits: true,
    environmentalImpact: true
  });


  // Helper Functions
  const validateInputs = () => {
    const errors = {};
    
    
    if (inputs.calculationMethod === CALCULATION_METHODS.BILL) {
        if (!inputs.monthlyBill || inputs.monthlyBill <= 0) errors.monthlyBill = "Must be greater than 0";
        if (!inputs.tariffRate || inputs.tariffRate <= 0) errors.tariffRate = "Must be greater than 0";
      } else {
        if (!inputs.availableArea || inputs.availableArea <= 0) errors.availableArea = "Must be greater than 0";
      }
      
      setValidationErrors(errors);
      return Object.keys(errors).length === 0;
  };

  const getRecommendedSolution = (capacity, systemType) => {
    const solutions = systemType === SYSTEM_TYPES.GRID_TIE ? gridTieData : offGridData;
    
    // Try to match by roof area first for area-based calculation
    if (inputs.calculationMethod === CALCULATION_METHODS.AREA) {
        const area = parseInt(inputs.availableArea);
        const matchingSolution = solutions.find(solution => {
          const [min, max] = parseRoofArea(solution.roofArea);
          return area >= min && area <= max;
        });
        if (matchingSolution) return matchingSolution;
      }
  
      // Capacity-based matching
      const matchingSolutions = solutions.filter(s => s.capacity >= capacity);
      return matchingSolutions.length > 0 ? matchingSolutions[0] : solutions[solutions.length - 1];
  };

  const calculateFromBill = () => {
    const locationFactor = getLocationFactor();
    const monthlyConsumption = inputs.monthlyBill / inputs.tariffRate;
    return monthlyConsumption / (120 * locationFactor);
  };

  const calculateFromArea = () => {
    return inputs.availableArea / 100; // 100 sq.ft per kW
  };

  const getLocationFactor = () => {
    if (!inputs.state) return 1.0;
    if (inputs.state.toLowerCase().includes('north')) return 0.8;
    if (inputs.state.toLowerCase().includes('south')) return 1.2;
    return 1.0;
  };

  // Event Handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  const handleCalculationMethodChange = (method) => {
    setInputs(prev => ({ ...prev, calculationMethod: method }));
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const runCalculations = () => {
    if (!validateInputs()) return;

    const capacity = inputs.calculationMethod === CALCULATION_METHODS.BILL 
      ? calculateFromBill() 
      : calculateFromArea();

    const recommendedSolution = getRecommendedSolution(capacity, inputs.systemType);
    const locationFactor = getLocationFactor();
    
    let annualSavings;
    if (inputs.calculationMethod === CALCULATION_METHODS.BILL) {
      const monthlyGeneration = recommendedSolution.generation / 12;
      annualSavings = monthlyGeneration * 12 * inputs.tariffRate;
    } else {
      annualSavings = recommendedSolution.capacity * 120 * locationFactor * 12 * (inputs.tariffRate || 6);
    }

    const breakEvenMonths = Math.ceil(recommendedSolution.cost / (annualSavings / 12));
    const co2Reduction = (recommendedSolution.generation / 12) * 12 * 0.82;

    setResults({
      recommendedCapacity: recommendedSolution.capacity.toFixed(2),
      requiredArea: recommendedSolution.roofArea,
      monthlyGeneration: (recommendedSolution.generation / 12).toFixed(0),
      annualSavings: annualSavings.toFixed(0),
      breakEvenMonths: breakEvenMonths,
      co2Reduction: co2Reduction.toFixed(0),
      recommendedSolution: recommendedSolution,
      costBreakdown: recommendedSolution.components,
      calculationMethod: inputs.calculationMethod
    });

    setShowReport(true);
  };

  return (
    <div className="solar-recommendation-container">
      <style>
        {`
          .solar-recommendation-container {
            max-width: 1200px;
            margin: 0 auto;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            padding: 1rem;
          }
          
          .section-header {
            background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
            color: white;
            padding-left: 1.5rem;
            padding-right: 1.5rem;
            border-radius: 10px;
            margin-bottom: 0.7rem;
          }
          
          .section-body {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
          }
          
          .card {
            background: white;
            border-radius: 10px;
            padding: 1rem;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
            margin-bottom: 1rem;
            border: 1px solid #e5e7eb;
          }
          
          .card-title {
            font-weight: 600;
      font-size: 1.1rem;
      margin-bottom: 0.75rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      color: #1e40af;
          }
          
          .card-content {
            transition: all 0.3s ease;
            overflow: hidden;
          }
          
          .input-group {
            margin-bottom: 1rem;
          }
          
          .input-label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 500;
            color: #374151;
          }
          
          .input-field {
      width: 100%; /* Ensure the input field takes the full width of its container */
      box-sizing: border-box; /* Include padding and border in the width calculation */
            height: 1.8rem;
            marginleft: 0.75rem;
            padding-left: 1rem;
            padding-right: 1rem;
            border: 1px solid #d1d5db;
            border-radius: 6px;
            font-size: 1rem;
                  transition: all 0.2s;
          }
          
          .input-field:focus {
            outline: none;
            border-color: #3b82f6;
            box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
          }
          
          .radio-group {
            display: flex;
            gap: 0.5rem;
            flex-wrap: wrap;
          }
          
          .radio-option {
           display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.25rem 0.5rem;
    font-size: 0.9rem;
      border-radius: 6px;
      background: #f3f4f6;
      transition: all 0.2s
          }

          .radio-option input:checked + span {
      background: #dbeafe;
      border-color: #3b82f6;
    }
          
          .button {
           background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
      color: white;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 6px;
      font-weight: 500;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      transition: all 0.2s;
      width: 100%;
      justify-content: center;
          }
          
          .button:hover {
            background: linear-gradient(135deg, #1d4ed8 0%, #1e3a8a 100%);
            transform: translateY(-1px);
          }
          
          .info-line {
            display: flex;
            justify-content: space-between;
            margin-bottom: 0.25rem;
    padding: 0.25rem 0;
      border-bottom: 1px dashed #e5e7eb;
          }
          
          .cost-item {
            display: flex;
            justify-content: space-between;
            margin-bottom: 0.5rem;
            padding: 0.25rem 0;
          }
          
          .error {
            color: #dc2626;
            font-size: 0.85rem;
            margin-left: 0.5rem;
          }
          
          .note {
            font-size: 0.85rem;
            color: #666;
            margin-top: 1rem;
            display: flex;
            align-items: center;
          }
          
          .tab-container {
            display: flex;
            margin-bottom: 1rem;
            border-bottom: 1px solid #ddd;
          }
          
          .tab {
            padding: 0.75rem 1.5rem;
            cursor: pointer;
            border-bottom: 3px solid transparent;
          }
          
          .tab.active {
            border-bottom-color: #2563eb;
            font-weight: 600;
            color: #2563eb;
          }
          
          .empty-state {
            background: #f5f5f5;
            border-radius: 10px;
            padding: 2rem;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 79%;
          }
         .system-details-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
      margin-top: 1rem;
    }
    
    .solution-feature {
      padding: 0.5rem;
      background: #f8fafc;
      border-radius: 8px;
      border: 1px solid #e2e8f0;
    }
    
    @media (max-width: 768px) {
      .section-body {
        flex-direction: column;
      }
      
      .radio-group {
        flex-direction: column;
      }
      
      .button {
        width: 100%;
      }
    }




    // Add these media queries to the existing style section
@media (max-width: 768px) {
  .section-header {
    padding: 1rem;
    text-align: center;
  }
  
  .section-header h2 {
    font-size: 1.2rem;
  }
  
  .section-body {
    flex-direction: column;
  }
  
  .card {
    margin-bottom: 0.5rem;
    padding: 0.75rem;
  }
  
  .radio-group {
    flex-direction: column;
    gap: 0.25rem;
  }
  
  .tab-container {
    flex-direction: column;
  }
  
  .tab {
    padding: 0.5rem;
    text-align: center;
  }
  
  .input-field {
    width: 90%;
  }
  
  .system-details-grid {
    grid-template-columns: 1fr;
  }
  
  .report-section h3 {
    flex-wrap: wrap;
    font-size: 1rem;
  }
  
  .info-line, .cost-item {
    font-size: 0.9rem;
  }
  
  .empty-state {
    padding: 1rem;
    height: auto;
  }
  
  // Add these specific media queries
  @media (max-width: 480px) {
    .card-title {
      font-size: 0.9rem;
    }
    
    .button {
      padding: 0.5rem;
      font-size: 0.9rem;
    }
    
    .input-group {
      margin-bottom: 0.5rem;
    }
    
    .input-label {
      font-size: 0.9rem;
    }
    
    .radio-option {
      font-size: 0.8rem;
      padding: 0.25rem;
    }
    
    .note {
      font-size: 0.75rem;
    }
  }
}
        `}
      </style>

      <div className="section-header">
  <div style={{ 
    display: 'flex', 
    flexDirection: window.innerWidth < 768 ? 'column' : 'row',
    justifyContent: window.innerWidth < 768 ? 'center' : 'space-between',
    alignItems: window.innerWidth < 768 ? 'center' : 'flex-start',
    gap: '1rem'
  }}>
    <div style={{ textAlign: window.innerWidth < 768 ? 'center' : 'left' }}>
      <h2 style={{ fontSize: '1.5rem' }}>Solar Recommendation Calculator</h2>
      <p>Estimate solar potential and savings</p>
    </div>
    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: window.innerWidth < 768 ? '0' : '1.5rem', marginBottom: window.innerWidth < 768 ? '1.5rem' : '0'  }}>
      <Sun size={window.innerWidth < 768 ? 32 : 50} />
    </div>
  </div>
</div>

      <div className="section-body">
        {/* Input Form */}
            <div style={{ flex: '1 1 50%', minWidth: '300px' }}>
              <div className="card">
                <h4 className="card-title" style={{ color: '#1d4ed8' }}>Input Details</h4>

                <div className="tab-container">
                  <Tab 
                label="Calculate by Bill" 
                active={inputs.calculationMethod === CALCULATION_METHODS.BILL}
                onClick={() => handleCalculationMethodChange(CALCULATION_METHODS.BILL)}
                  />
                  <Tab 
                label="Calculate by Roof Area" 
                active={inputs.calculationMethod === CALCULATION_METHODS.AREA}
                onClick={() => handleCalculationMethodChange(CALCULATION_METHODS.AREA)}
                  />
                </div>

                <div style={{ 
                  display: 'flex', 
                  gap: window.innerWidth < 768 ? '0.5rem' : '9.8rem', 
                  flexWrap: 'wrap', 
                  flexDirection: window.innerWidth < 768 ? 'column' : 'row' 
                }}>
              <RadioGroup
                label="System Type"
                name="systemType"
                options={[
                  { value: SYSTEM_TYPES.GRID_TIE, label: 'Grid-Tie' },
                  { value: SYSTEM_TYPES.OFF_GRID, label: 'Off-Grid' }
                ]}
                selectedValue={inputs.systemType}
                onChange={handleInputChange}
                compact
              />

              <RadioGroup
                label="Power Phase"
                name="powerPhase"
                options={[
                  { value: PHASE_TYPES.SINGLE, label: 'Single' },
                  { value: PHASE_TYPES.THREE, label: 'Three' }
                ]}
                selectedValue={inputs.powerPhase}
                onChange={handleInputChange}
                compact
              />
            </div>

         
            {inputs.calculationMethod === CALCULATION_METHODS.BILL ? (
              <div style={{ 
                display: 'flex', 
                gap: window.innerWidth < 768 ? '0.5rem' : '8.1rem', 
                flexDirection: window.innerWidth < 768 ? 'column' : 'row'
              }}>
                <InputField
                  label="Monthly Bill (₹)"
                  name="monthlyBill"
                  value={inputs.monthlyBill}
                  onChange={handleInputChange}
                  type="number"
                  placeholder="Monthly bill"
                  error={validationErrors.monthlyBill}
                  compact
                />

                <InputField
                  label="Per Unit Cost (₹/kWh)"
                  name="tariffRate"
                  value={inputs.tariffRate}
                  onChange={handleInputChange}
                  type="number"
                  placeholder="Electricity rate"
                  error={validationErrors.tariffRate}
                  compact
                />
              </div>
            ) : (
              <InputField
                label="Roof Area (Sq.ft)"
                name="availableArea"
                value={inputs.availableArea}
                onChange={handleInputChange}
                type="number"
                placeholder="Available roof area"
                error={validationErrors.availableArea}
                compact
              />
            )}

            <div>
              <button onClick={runCalculations} className="button">
                <BarChart size={18} style={{ marginRight: '0.5rem' }} />
                Generate Recommendation
              </button>
                </div>
              </div>
            </div>

            {/* Results Panel */}
        <div style={{ flex: '1 1 45%', minWidth: '300px' }}>
          {!showReport ? (
            <div className="empty-state">
              <Sun size={48} color="#facc15" />
              <h3 style={{ marginTop: '1rem', color: '#333' }}>Solar Recommendation</h3>
              <p style={{ color: '#666', marginTop: '0.5rem' }}>
                {inputs.calculationMethod === CALCULATION_METHODS.BILL 
                  ? "Enter your bill details to see your customized solar solution." 
                  : "Enter your roof area to see recommended solar solutions."}
              </p>
            </div>
          ) : (
            <div className="report-section">
             <h3 style={{ 
  fontWeight: 'bold', 
  fontSize: '1.1rem',
  flexWrap: 'wrap',
  gap: '0.5rem'
}}>
  <Sun size={20} style={{ marginRight: '0.25rem' }} />
  Your Tata Power Solar Recommendation
</h3>

              {/* System Details */}
              <div className="card">
                <div 
                  className="card-title" 
                  style={{ color: '#15803d' }}
                  onClick={() => toggleSection('systemDetails')}
                >
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Zap size={18} style={{ marginRight: '0.5rem' }} />
                    System Details
                  </div>
                  {expandedSections.systemDetails ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>
                {expandedSections.systemDetails && (
                  <div className="card-content">
                    <InfoLine 
                      label="Recommended Solution:" 
                      value={results.recommendedSolution.solution} 
                    />
                    <InfoLine label="System Type:" value={inputs.systemType} />
                    <InfoLine 
                      label="Recommended Capacity:" 
                      value={`${results.recommendedCapacity} kWp`} 
                    />
                    <InfoLine label="Required Area:" value={results.requiredArea} />
                    <InfoLine 
                      label="Monthly Generation:" 
                      value={`${formatNumber(results.monthlyGeneration)} kWh`} 
                    />
                    <InfoLine 
                      label={inputs.systemType === SYSTEM_TYPES.GRID_TIE ? 'Inverter:' : 'PCU:'} 
                      value={inputs.systemType === SYSTEM_TYPES.GRID_TIE 
                        ? results.recommendedSolution.inverter 
                        : results.recommendedSolution.pcu} 
                    />
                    <InfoLine 
                      label="Solar Panels:" 
                      value={results.recommendedSolution.modules} 
                    />
                    {inputs.systemType === SYSTEM_TYPES.OFF_GRID && (
                      <InfoLine 
                        label="Batteries:" 
                        value={results.recommendedSolution.batteries} 
                      />
                    )}
                  </div>
                )}
              </div>

              {/* Cost Estimate */}
              <div className="card" style={{ marginTop: '0.5rem' }}>
                <div 
                  className="card-title" 
                  style={{ color: '#1d4ed8' }}
                  onClick={() => toggleSection('costEstimate')}
                >
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <IndianRupee size={18} style={{ marginRight: '0.5rem' }} />
                    Cost Estimate
                  </div>
                  {expandedSections.costEstimate ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>
                {expandedSections.costEstimate && (
                  <div className="card-content">
                    <CostItem label="Solar Panels:" value={results.costBreakdown.panels} />
                    <CostItem 
                      label={`${inputs.systemType === SYSTEM_TYPES.GRID_TIE ? 'Inverter' : 'PCU'}:`} 
                      value={results.costBreakdown.inverter} 
                    />
                    {inputs.systemType === SYSTEM_TYPES.OFF_GRID && (
                      <CostItem label="Batteries:" value={results.costBreakdown.batteries} />
                    )}
                    <CostItem label="Mounting Structure:" value={results.costBreakdown.structure} />
                    <CostItem label="Wiring & Accessories:" value={results.costBreakdown.wiring} />
                    <CostItem label="Installation:" value={results.costBreakdown.installation} />
                    <div style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid #eee' }}>
                      <CostItem 
                        label="Total Estimated Cost:" 
                        value={results.recommendedSolution.cost} 
                        highlight
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Financial Benefits */}
              {results.calculationMethod === CALCULATION_METHODS.BILL && (
                <div className="card" style={{ marginTop: '0.5rem' }}>
                  <div 
                    className="card-title" 
                    style={{ color: '#1d4ed8' }}
                    onClick={() => toggleSection('financialBenefits')}
                  >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <BarChart size={18} style={{ marginRight: '0.5rem' }} />
                      Financial Benefits
                    </div>
                    {expandedSections.financialBenefits ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                  {expandedSections.financialBenefits && (
                    <div className="card-content">
                      <InfoLine 
                        label="Annual Savings:" 
                        value={`₹ ${formatNumber(results.annualSavings)}`} 
                        highlight 
                      />
                      <InfoLine 
  label="Break-even Period:" 
  value={`${Math.floor(results.breakEvenMonths/12)}y ${results.breakEvenMonths%12}m`} 
/>
                    </div>
                  )}
                </div>
              )}

              {/* Environmental Impact */}
              <div className="card" style={{ marginTop: '0.5rem' }}>
                <div 
                  className="card-title" 
                  style={{ color: '#0f766e' }}
                  onClick={() => toggleSection('environmentalImpact')}
                >
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <AlertTriangle size={18} style={{ marginRight: '0.5rem' }} />
                    Environmental Impact
                  </div>
                  {expandedSections.environmentalImpact ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>
                {expandedSections.environmentalImpact && (
                  <div className="card-content">
                    <InfoLine 
                      label="Annual CO₂ Reduction:" 
                      value={`${formatNumber(results.co2Reduction)} kg`} 
                    />
                    <div style={{ 
                      color: '#666', 
                      marginTop: '0.5rem', 
                      display: 'flex', 
                      alignItems: 'center',
                      fontSize: '0.9rem'
                    }}>
                      <AlertTriangle size={16} color="#facc15" style={{ marginRight: '0.5rem' }} />
                      Equivalent to planting {Math.round(parseFloat(results.co2Reduction) / 20)} trees per year
                    </div>
                  </div>
                )}
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