import {browser, by, element, ElementArrayFinder, ElementFinder, promise} from 'protractor';
import Promise = promise.Promise;

export class PharmacyPickerPage{
    navigateTo(){
        browser.get('/');
    }

    showNamesOfPharmacies(): Promise<string[]>{
        return this.pharmacyNameItems().map(pharmacyNameItem => pharmacyNameItem.getText());
    }

    private pharmacyNameItems(): ElementArrayFinder{
        return element.all(by.css('.pharmacy .name'));
    }
}