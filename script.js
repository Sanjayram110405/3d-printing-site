function calculatePrice() {
    const materialPrices = {
        PLA: 4.2, // Price per gram in INR
        PETG: 5.0,
        ABS: 5.8,
        TPU: 6.5,
        ASA: 7.2
    };

    let material = document.getElementById("material").value;
    let infill = document.getElementById("infill").value / 100;

    // Dummy values for volume and weight estimation
    let modelVolume = 50; // cm³ (Replace with actual model volume calculation from CAD file)
    let density = 1.24; // g/cm³ (Average for PLA, adjust based on material)
    let weight = modelVolume * density * infill;

    let cost = weight * materialPrices[material];
    document.getElementById("priceOutput").innerText = `Estimated Cost: ₹${cost.toFixed(2)} (Weight: ${weight.toFixed(2)}g)`;
}
