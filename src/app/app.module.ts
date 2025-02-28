import { SearchResultComponent } from './pages/search-result/search-result.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { HeaderComponent } from './main-components/header/header.component';
import { FooterComponent } from './main-components/footer/footer.component';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { NgIconsModule } from '@ng-icons/core';
import {
  bootstrapArrowDown,
  bootstrapArrowLeft,
  bootstrapArrowRight,
  bootstrapArrowUp,
  bootstrapEye,
  bootstrapEyeSlash,
  bootstrapList,
  bootstrapPencil,
  bootstrapPersonFill,
  bootstrapSearch,
} from '@ng-icons/bootstrap-icons';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SearchResultModule } from './pages/search-result/search-result.module';
import { RefreshtokenInterceptor } from './auth/refreshtoken.interceptor';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    SearchResultModule,
    NgIconsModule.withIcons({
      bootstrapPersonFill,
      bootstrapPencil,
      bootstrapSearch,
      bootstrapList,
      bootstrapEye,
      bootstrapEyeSlash,
      bootstrapArrowLeft,
      bootstrapArrowRight,
      bootstrapArrowDown,
      bootstrapArrowUp,
    }),
    NgbDropdownModule,
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RefreshtokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
