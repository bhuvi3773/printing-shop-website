import React, { useState, useMemo } from 'react';
import { SERVICES, DEMO_PRICE_DISCLAIMER, SHOP_CONTACT_INFO } from '../data/servicesData';

export default function PricingCalculator({ selectedServiceId, onServiceChange }) {
  const currentService = useMemo(() => {
    return SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];
  }, [selectedServiceId]);

  // Form State
  const [visitingCardType, setVisitingCardType] = useState('standard');
  const [visitingPaper, setVisitingPaper] = useState('art-300');
  const [visitingSides, setVisitingSides] = useState('single');
  const [visitingFinish, setVisitingFinish] = useState('matte');
  const [visitingQuantity, setVisitingQuantity] = useState(500);

  // Flex Banner State
  const [flexWidth, setFlexWidth] = useState(6);
  const [flexHeight, setFlexHeight] = useState(4);
  const [flexMaterial, setFlexMaterial] = useState('star-flex');
  const [flexFinish, setFlexFinish] = useState('hemming');
  const [flexQuantity, setFlexQuantity] = useState(1);

  // Flyers State
  const [flyerSize, setFlyerSize] = useState('a5');
  const [flyerWeight, setFlyerWeight] = useState('130-gsm');
  const [flyerSides, setFlyerSides] = useState('single');
  const [flyerFold, setFlyerFold] = useState('flat');
  const [flyerQuantity, setFlyerQuantity] = useState(1000);

  // Stickers State
  const [stickerSize, setStickerSize] = useState('2x2');
  const [stickerMaterial, setStickerMaterial] = useState('vinyl-waterproof');
  const [stickerCut, setStickerCut] = useState('sheet');
  const [stickerQuantity, setStickerQuantity] = useState(500);

  // Stationery State
  const [stationeryType, setStationeryType] = useState('letterhead');
  const [stationeryGrade, setStationeryGrade] = useState('85-gsm');
  const [stationeryQuantity, setStationeryQuantity] = useState(500);

  // Custom Quote State
  const [customDescription, setCustomDescription] = useState('');
  const [quoteRequested, setQuoteRequested] = useState(false);

  // Calculation Engine
  const calculation = useMemo(() => {
    if (currentService.isCustomQuoteOnly) {
      return {
        isQuoteOnly: true,
        total: 0,
        unitPrice: 0,
        specsSummary: 'Bespoke custom printing requested.',
      };
    }

    let total = 0;
    let qty = 1;
    let summaryParts = [];

    if (currentService.id === 'visiting-cards') {
      qty = Number(visitingQuantity) || 100;
      const cardTypeObj = currentService.options.cardType.find((c) => c.id === visitingCardType) || currentService.options.cardType[0];
      const paperObj = currentService.options.paperStock.find((p) => p.id === visitingPaper) || currentService.options.paperStock[0];
      const sidesObj = currentService.options.sides.find((s) => s.id === visitingSides) || currentService.options.sides[0];
      const finishObj = currentService.options.finish.find((f) => f.id === visitingFinish) || currentService.options.finish[0];

      const basePerCard = (currentService.options.baseRatePer100 / 100) * cardTypeObj.priceMultiplier;
      const paperAdd = paperObj.addPerUnit;
      const printMultiplier = sidesObj.multiplier;
      const finishAdd = finishObj.addTotal;

      const unitCost = (basePerCard + paperAdd) * printMultiplier;
      total = Math.round(unitCost * qty + finishAdd);

      summaryParts = [
        `Size: ${cardTypeObj.name}`,
        `Paper: ${paperObj.name}`,
        `Printing: ${sidesObj.name}`,
        `Lamination: ${finishObj.name}`,
        `Quantity: ${qty} cards`,
      ];
    } else if (currentService.id === 'flex-banners') {
      qty = Math.max(1, Math.min(100, Number(flexQuantity) || 1));
      const w = Math.max(1, Math.min(60, Number(flexWidth) || 1));
      const h = Math.max(1, Math.min(20, Number(flexHeight) || 1));
      const sqFt = w * h;

      const matObj = currentService.options.materialGrade.find((m) => m.id === flexMaterial) || currentService.options.materialGrade[0];
      const finishObj = currentService.options.finishing.find((f) => f.id === flexFinish) || currentService.options.finishing[0];

      const bannerBase = sqFt * matObj.ratePerSqFt;
      total = Math.round((bannerBase + finishObj.addTotal) * qty);

      summaryParts = [
        `Dimensions: ${w} ft × ${h} ft (${sqFt} sq. ft)`,
        `Material: ${matObj.name}`,
        `Finishing: ${finishObj.name}`,
        `Quantity: ${qty} banner(s)`,
      ];
    } else if (currentService.id === 'flyers-brochures') {
      qty = Number(flyerQuantity) || 500;
      const sizeObj = currentService.options.paperSize.find((s) => s.id === flyerSize) || currentService.options.paperSize[0];
      const weightObj = currentService.options.paperWeight.find((w) => w.id === flyerWeight) || currentService.options.paperWeight[0];
      const sidesObj = currentService.options.sides.find((s) => s.id === flyerSides) || currentService.options.sides[0];
      const foldObj = currentService.options.foldType.find((f) => f.id === flyerFold) || currentService.options.foldType[0];

      const basePerUnit = (sizeObj.baseRatePer1000 / 1000) * weightObj.multiplier * sidesObj.multiplier;
      total = Math.round(basePerUnit * qty + foldObj.addTotal);

      summaryParts = [
        `Size: ${sizeObj.name}`,
        `Stock: ${weightObj.name}`,
        `Printing: ${sidesObj.name}`,
        `Creasing: ${foldObj.name}`,
        `Quantity: ${qty} units`,
      ];
    } else if (currentService.id === 'stickers-labels') {
      qty = Number(stickerQuantity) || 100;
      const sizeObj = currentService.options.stickerSize.find((s) => s.id === stickerSize) || currentService.options.stickerSize[0];
      const matObj = currentService.options.materialType.find((m) => m.id === stickerMaterial) || currentService.options.materialType[0];
      const cutObj = currentService.options.cutType.find((c) => c.id === stickerCut) || currentService.options.cutType[0];

      const basePerUnit = (sizeObj.base100 / 100) * matObj.multiplier;
      total = Math.round(basePerUnit * qty + cutObj.addTotal);

      summaryParts = [
        `Size: ${sizeObj.name}`,
        `Material: ${matObj.name}`,
        `Cutting: ${cutObj.name}`,
        `Quantity: ${qty} stickers`,
      ];
    } else if (currentService.id === 'office-stationery') {
      qty = Number(stationeryQuantity) || 500;
      const prodObj = currentService.options.productType.find((p) => p.id === stationeryType) || currentService.options.productType[0];
      const gradeObj = currentService.options.paperGrade.find((g) => g.id === stationeryGrade) || currentService.options.paperGrade[0];

      const basePerUnit = (prodObj.baseRatePer500 / 500) * gradeObj.multiplier;
      total = Math.round(basePerUnit * qty);

      summaryParts = [
        `Item: ${prodObj.name}`,
        `Paper Grade: ${gradeObj.name}`,
        `Quantity: ${qty} sets`,
      ];
    }

    const unitPrice = qty > 0 ? (total / qty).toFixed(2) : 0;

    return {
      isQuoteOnly: false,
      total,
      unitPrice,
      qty,
      specsSummary: summaryParts.join(' | '),
    };
  }, [
    currentService,
    visitingCardType,
    visitingPaper,
    visitingSides,
    visitingFinish,
    visitingQuantity,
    flexWidth,
    flexHeight,
    flexMaterial,
    flexFinish,
    flexQuantity,
    flyerSize,
    flyerWeight,
    flyerSides,
    flyerFold,
    flyerQuantity,
    stickerSize,
    stickerMaterial,
    stickerCut,
    stickerQuantity,
    stationeryType,
    stationeryGrade,
    stationeryQuantity,
  ]);

  // Construct WhatsApp Enquiry Link
  const whatsappUrl = useMemo(() => {
    const rawNumber = SHOP_CONTACT_INFO.whatsappNumber;
    let messageText = `Hello ${SHOP_CONTACT_INFO.shopName}! I would like to inquire about printing services:\n\n`;
    messageText += `*Service:* ${currentService.title}\n`;

    if (calculation.isQuoteOnly) {
      messageText += `*Inquiry Type:* Custom Quotation Request\n`;
      if (customDescription.trim()) {
        messageText += `*Details:* ${customDescription.trim()}\n`;
      }
    } else {
      messageText += `*Specifications:* ${calculation.specsSummary}\n`;
      messageText += `*Estimated Total (Demo Rate):* ₹${calculation.total}\n`;
      messageText += `*Estimated Unit Rate:* ₹${calculation.unitPrice}\n`;
    }

    messageText += `\nPlease verify your current rate card and paper availability for this configuration.`;
    return `https://wa.me/${rawNumber}?text=${encodeURIComponent(messageText)}`;
  }, [currentService, calculation, customDescription]);

  return (
    <section id="pricing" className="section pricing-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Interactive Estimator</span>
          <h2 className="section-title">Configure & Calculate Price</h2>
          <p className="section-subtitle">
            Select your product specifications to receive an instant estimate based on standard workshop rates.
          </p>
        </div>

        {/* Demo Price Notice Banner */}
        <div className="demo-notice-card" role="note" aria-label="Demo Pricing Notice">
          <div className="notice-icon" aria-hidden="true">ℹ️</div>
          <div className="notice-content">
            <strong>Demonstration Rate Notice:</strong>
            <p>{DEMO_PRICE_DISCLAIMER}</p>
          </div>
        </div>

        <div className="calculator-layout">
          {/* Left Column: Service Tabs & Controls */}
          <div className="calculator-controls-panel card">
            {/* Service Selection Tabs */}
            <div className="service-tab-bar" role="tablist" aria-label="Select Printing Service">
              {SERVICES.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  role="tab"
                  aria-selected={s.id === currentService.id}
                  className={`service-tab-btn ${s.id === currentService.id ? 'active' : ''}`}
                  onClick={() => onServiceChange(s.id)}
                >
                  <span className="tab-icon" aria-hidden="true">{s.icon}</span>
                  <span className="tab-label">{s.title.split('&')[0].trim()}</span>
                </button>
              ))}
            </div>

            {/* Dynamic Controls based on Service */}
            <div className="control-groups-container">
              {currentService.id === 'visiting-cards' && (
                <>
                  <div className="control-group">
                    <label htmlFor="card-type-select">Card Dimension & Style</label>
                    <select
                      id="card-type-select"
                      className="form-select"
                      value={visitingCardType}
                      onChange={(e) => setVisitingCardType(e.target.value)}
                    >
                      {currentService.options.cardType.map((opt) => (
                        <option key={opt.id} value={opt.id}>{opt.name}</option>
                      ))}
                    </select>
                  </div>

                  <div className="control-group">
                    <label htmlFor="card-paper-select">Paper Stock & Substrate</label>
                    <select
                      id="card-paper-select"
                      className="form-select"
                      value={visitingPaper}
                      onChange={(e) => setVisitingPaper(e.target.value)}
                    >
                      {currentService.options.paperStock.map((opt) => (
                        <option key={opt.id} value={opt.id}>{opt.name}</option>
                      ))}
                    </select>
                  </div>

                  <div className="control-row">
                    <div className="control-group half">
                      <label htmlFor="card-sides-select">Sides</label>
                      <select
                        id="card-sides-select"
                        className="form-select"
                        value={visitingSides}
                        onChange={(e) => setVisitingSides(e.target.value)}
                      >
                        {currentService.options.sides.map((opt) => (
                          <option key={opt.id} value={opt.id}>{opt.name}</option>
                        ))}
                      </select>
                    </div>

                    <div className="control-group half">
                      <label htmlFor="card-finish-select">Lamination / Finish</label>
                      <select
                        id="card-finish-select"
                        className="form-select"
                        value={visitingFinish}
                        onChange={(e) => setVisitingFinish(e.target.value)}
                      >
                        {currentService.options.finish.map((opt) => (
                          <option key={opt.id} value={opt.id}>{opt.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="control-group">
                    <label htmlFor="card-quantity-select">Quantity (Cards)</label>
                    <div className="quantity-pills">
                      {currentService.options.quantities.map((q) => (
                        <button
                          key={q}
                          type="button"
                          className={`pill-btn ${visitingQuantity === q ? 'active' : ''}`}
                          onClick={() => setVisitingQuantity(q)}
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {currentService.id === 'flex-banners' && (
                <>
                  <div className="control-row">
                    <div className="control-group half">
                      <label htmlFor="flex-width-input">Width (Feet)</label>
                      <input
                        id="flex-width-input"
                        type="number"
                        min="2"
                        max="60"
                        className="form-input"
                        value={flexWidth}
                        onChange={(e) => setFlexWidth(e.target.value)}
                      />
                    </div>
                    <div className="control-group half">
                      <label htmlFor="flex-height-input">Height (Feet)</label>
                      <input
                        id="flex-height-input"
                        type="number"
                        min="2"
                        max="20"
                        className="form-input"
                        value={flexHeight}
                        onChange={(e) => setFlexHeight(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="calc-dim-badge">
                    Total Area: <strong>{Number(flexWidth) * Number(flexHeight)} sq. ft</strong>
                  </div>

                  <div className="control-group">
                    <label htmlFor="flex-material-select">Banner Material Grade</label>
                    <select
                      id="flex-material-select"
                      className="form-select"
                      value={flexMaterial}
                      onChange={(e) => setFlexMaterial(e.target.value)}
                    >
                      {currentService.options.materialGrade.map((opt) => (
                        <option key={opt.id} value={opt.id}>{opt.name} — ₹{opt.ratePerSqFt}/sq.ft</option>
                      ))}
                    </select>
                  </div>

                  <div className="control-group">
                    <label htmlFor="flex-finish-select">Edge Hemming & Eyelets</label>
                    <select
                      id="flex-finish-select"
                      className="form-select"
                      value={flexFinish}
                      onChange={(e) => setFlexFinish(e.target.value)}
                    >
                      {currentService.options.finishing.map((opt) => (
                        <option key={opt.id} value={opt.id}>{opt.name}</option>
                      ))}
                    </select>
                  </div>

                  <div className="control-group">
                    <label htmlFor="flex-qty-select">Banner Count</label>
                    <div className="quantity-pills">
                      {currentService.options.quantities.map((q) => (
                        <button
                          key={q}
                          type="button"
                          className={`pill-btn ${flexQuantity === q ? 'active' : ''}`}
                          onClick={() => setFlexQuantity(q)}
                        >
                          {q} {q === 1 ? 'Banner' : 'Banners'}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {currentService.id === 'flyers-brochures' && (
                <>
                  <div className="control-group">
                    <label htmlFor="flyer-size-select">Flyer Dimensions</label>
                    <select
                      id="flyer-size-select"
                      className="form-select"
                      value={flyerSize}
                      onChange={(e) => setFlyerSize(e.target.value)}
                    >
                      {currentService.options.paperSize.map((opt) => (
                        <option key={opt.id} value={opt.id}>{opt.name}</option>
                      ))}
                    </select>
                  </div>

                  <div className="control-row">
                    <div className="control-group half">
                      <label htmlFor="flyer-weight-select">Paper Weight</label>
                      <select
                        id="flyer-weight-select"
                        className="form-select"
                        value={flyerWeight}
                        onChange={(e) => setFlyerWeight(e.target.value)}
                      >
                        {currentService.options.paperWeight.map((opt) => (
                          <option key={opt.id} value={opt.id}>{opt.name}</option>
                        ))}
                      </select>
                    </div>

                    <div className="control-group half">
                      <label htmlFor="flyer-sides-select">Sides</label>
                      <select
                        id="flyer-sides-select"
                        className="form-select"
                        value={flyerSides}
                        onChange={(e) => setFlyerSides(e.target.value)}
                      >
                        {currentService.options.sides.map((opt) => (
                          <option key={opt.id} value={opt.id}>{opt.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="control-group">
                    <label htmlFor="flyer-fold-select">Folding / Crease</label>
                    <select
                      id="flyer-fold-select"
                      className="form-select"
                      value={flyerFold}
                      onChange={(e) => setFlyerFold(e.target.value)}
                    >
                      {currentService.options.foldType.map((opt) => (
                        <option key={opt.id} value={opt.id}>{opt.name}</option>
                      ))}
                    </select>
                  </div>

                  <div className="control-group">
                    <label htmlFor="flyer-quantity-select">Quantity (Units)</label>
                    <div className="quantity-pills">
                      {currentService.options.quantities.map((q) => (
                        <button
                          key={q}
                          type="button"
                          className={`pill-btn ${flyerQuantity === q ? 'active' : ''}`}
                          onClick={() => setFlyerQuantity(q)}
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {currentService.id === 'stickers-labels' && (
                <>
                  <div className="control-group">
                    <label htmlFor="sticker-size-select">Sticker Size</label>
                    <select
                      id="sticker-size-select"
                      className="form-select"
                      value={stickerSize}
                      onChange={(e) => setStickerSize(e.target.value)}
                    >
                      {currentService.options.stickerSize.map((opt) => (
                        <option key={opt.id} value={opt.id}>{opt.name}</option>
                      ))}
                    </select>
                  </div>

                  <div className="control-row">
                    <div className="control-group half">
                      <label htmlFor="sticker-mat-select">Substrate Material</label>
                      <select
                        id="sticker-mat-select"
                        className="form-select"
                        value={stickerMaterial}
                        onChange={(e) => setStickerMaterial(e.target.value)}
                      >
                        {currentService.options.materialType.map((opt) => (
                          <option key={opt.id} value={opt.id}>{opt.name}</option>
                        ))}
                      </select>
                    </div>

                    <div className="control-group half">
                      <label htmlFor="sticker-cut-select">Cut Style</label>
                      <select
                        id="sticker-cut-select"
                        className="form-select"
                        value={stickerCut}
                        onChange={(e) => setStickerCut(e.target.value)}
                      >
                        {currentService.options.cutType.map((opt) => (
                          <option key={opt.id} value={opt.id}>{opt.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="control-group">
                    <label htmlFor="sticker-quantity-select">Quantity (Stickers)</label>
                    <div className="quantity-pills">
                      {currentService.options.quantities.map((q) => (
                        <button
                          key={q}
                          type="button"
                          className={`pill-btn ${stickerQuantity === q ? 'active' : ''}`}
                          onClick={() => setStickerQuantity(q)}
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {currentService.id === 'office-stationery' && (
                <>
                  <div className="control-group">
                    <label htmlFor="stationery-type-select">Stationery Item</label>
                    <select
                      id="stationery-type-select"
                      className="form-select"
                      value={stationeryType}
                      onChange={(e) => setStationeryType(e.target.value)}
                    >
                      {currentService.options.productType.map((opt) => (
                        <option key={opt.id} value={opt.id}>{opt.name}</option>
                      ))}
                    </select>
                  </div>

                  <div className="control-group">
                    <label htmlFor="stationery-grade-select">Paper Grade</label>
                    <select
                      id="stationery-grade-select"
                      className="form-select"
                      value={stationeryGrade}
                      onChange={(e) => setStationeryGrade(e.target.value)}
                    >
                      {currentService.options.paperGrade.map((opt) => (
                        <option key={opt.id} value={opt.id}>{opt.name}</option>
                      ))}
                    </select>
                  </div>

                  <div className="control-group">
                    <label htmlFor="stationery-quantity-select">Quantity</label>
                    <div className="quantity-pills">
                      {currentService.options.quantities.map((q) => (
                        <button
                          key={q}
                          type="button"
                          className={`pill-btn ${stationeryQuantity === q ? 'active' : ''}`}
                          onClick={() => setStationeryQuantity(q)}
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {currentService.isCustomQuoteOnly && (
                <div className="custom-quote-box">
                  <p className="custom-quote-lead">{currentService.customMessage}</p>
                  <div className="control-group">
                    <label htmlFor="custom-notes">Project Specifications / Notes (Optional)</label>
                    <textarea
                      id="custom-notes"
                      className="form-textarea"
                      rows="4"
                      placeholder="Specify sizes, estimated quantities, special inks, or binding options..."
                      value={customDescription}
                      onChange={(e) => setCustomDescription(e.target.value)}
                    ></textarea>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Pricing Summary & Enquiry Action */}
          <div className="calculator-summary-panel card">
            <div className="summary-header">
              <span className="summary-tag">Rate Summary</span>
              <span className="badge demo-badge">Demonstration Rate</span>
            </div>

            <div className="selected-service-title">
              <h3>{currentService.title}</h3>
              <p className="summary-specs">{calculation.specsSummary}</p>
            </div>

            {/* Price Output Area */}
            {!calculation.isQuoteOnly ? (
              <div className="price-display-box">
                <div className="price-primary">
                  <span className="currency-symbol">₹</span>
                  <span className="price-number">{calculation.total.toLocaleString('en-IN')}</span>
                  <span className="price-tax-note">Approx. Total</span>
                </div>
                <div className="price-secondary">
                  <span>Unit Rate: <strong>₹{calculation.unitPrice}</strong> / item</span>
                </div>
              </div>
            ) : (
              <div className="price-display-box quote-mode">
                <div className="quote-mode-badge">Direct Quote Required</div>
                <p>This bespoke item requires tailored material and printing calculations.</p>
              </div>
            )}

            {/* Direct Shop Enquiry Action */}
            <div className="summary-actions">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-block whatsapp-btn"
              >
                <span className="btn-icon">💬</span>
                <span>Send WhatsApp Enquiry</span>
              </a>

              <a href="#contact" className="btn btn-secondary btn-block">
                Visit Shop or Call Direct
              </a>
            </div>

            {/* Crucial WhatsApp Disclaimer */}
            <div className="disclaimer-note">
              <small>
                ⚠️ <strong>Order Notice:</strong> Tapping "Send WhatsApp Enquiry" creates a pre-formatted chat message with our shop desk. It does not place, finalize, or charge an order. All orders are reviewed and confirmed directly at our shop.
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
