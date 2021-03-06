import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CmasBidsBidModule } from './bid/bid.module';
import { CmasBidsDepartmentModule } from './department/department.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        CmasBidsBidModule,
        CmasBidsDepartmentModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CmasBidsEntityModule {}
