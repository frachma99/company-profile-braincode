import { DataAction, Payload, StateRepository } from '@ngxs-labs/data/decorators';
import { Select, State } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { NgxsImmutableDataRepository } from '@ngxs-labs/data/repositories';
import { Immutable } from "@ngxs-labs/data/typings";
import { ServicesPageModel } from "./services.model";

@StateRepository()
@State<ServicesPageModel>({
    name: 'services',
    defaults: new ServicesPageModel()
})
@Injectable({
    providedIn: 'root'
})
export class ServicesPageState extends NgxsImmutableDataRepository<ServicesPageModel> {
    // @Select("landing.landingData") selectLanding;
    constructor() {
        super();
    }

    @DataAction()
    public setServicesData(@Payload('servicesData') str): void {
        this.ctx.setState(
            (state: Immutable<ServicesPageModel>): Immutable<ServicesPageModel> => ({
                ...state,
                servicesData: str
            }));
    }
}
