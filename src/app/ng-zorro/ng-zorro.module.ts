import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';

const NgZorroComponents = [
    NzButtonModule,
    NzIconModule,
    NzInputModule
]

@NgModule({
    imports: [NgZorroComponents],
    exports: [NgZorroComponents]
})
export class NgZorroModule { }