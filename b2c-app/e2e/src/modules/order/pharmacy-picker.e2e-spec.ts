import { PharmacyPickerPage } from "./pharmacy-picker.po";

describe('Pharmacy Picker', function() {
    it('should show a list of pharmacies, initially containing "Pharmacy 001" and "Pharmacy 002"', function() {
        const page: PharmacyPickerPage = new PharmacyPickerPage();
        page.navigateTo();
        expect(page.showNamesOfPharmacies()).toContain('Pharmacy 001');
        expect(page.showNamesOfPharmacies()).toContain('Pharmacy 002');
    });
});