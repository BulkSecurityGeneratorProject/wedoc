import { NgModule } from '@angular/core';

import { WedocSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [WedocSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [WedocSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class WedocSharedCommonModule {}
