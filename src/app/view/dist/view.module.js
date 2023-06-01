"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ViewModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var ngx_datatable_1 = require("@swimlane/ngx-datatable");
var view_routing_module_1 = require("./view-routing.module");
var customers_component_1 = require("./components/customers/customers.component");
var forms_1 = require("@angular/forms");
var customer_create_component_1 = require("./components/customer-create/customer-create.component");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ng_select_1 = require("@ng-select/ng-select");
var ngx_countdown_1 = require("ngx-countdown");
var ViewModule = /** @class */ (function () {
    function ViewModule() {
    }
    ViewModule = __decorate([
        core_1.NgModule({
            declarations: [
                customers_component_1.CustomersComponent,
                customer_create_component_1.CustomerCreateComponent,
            ],
            imports: [
                common_1.CommonModule,
                view_routing_module_1.ViewRoutingModule,
                forms_1.FormsModule,
                ngx_datatable_1.NgxDatatableModule,
                ng_bootstrap_1.NgbModule,
                ng_select_1.NgSelectModule,
                ngx_countdown_1.CountdownModule
            ]
        })
    ], ViewModule);
    return ViewModule;
}());
exports.ViewModule = ViewModule;
