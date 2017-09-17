//每个浏览器中运行的应用都需要 @angular/platform-browser 里的 BrowserModule。 所以每个这样的应用都在其根 AppModule 的 imports 数组中包含 BrowserModule。我们导入了BrowserModule便会自动导入类似NgIf,NgFor这些指令
import { BrowserModule } from '@angular/platform-browser';
//我们创建的所有的模块必须要在NgModule当中声明，否则报错
import { NgModule } from '@angular/core';
//一个 Angular 模块还包含应用程序需要的外部 Angular 模块的列表，例如 FormsModule,HttpModule,它们的职责单一，完成某种特定的功能
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
//每个应用都至少有一个根模块用来引导并运行应用。根模块通常命名为 AppModule。
import { AppComponent } from './app.component';

@NgModule({
//声明本模块中拥有的视图类，你可以理解成是vue中的组件
    declarations: [
        AppComponent
    ],
    //本模块依赖的东西
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
    ],
    providers: [],
    //指定应用的主视图（称为根组件），它是所有其它视图的宿主。只有根模块才能设置bootstrap属性，你可以理解成是vue中的$mount
    bootstrap: [AppComponent]
})
export class AppModule {}