import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should have title named "LOGIN"', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h3')?.textContent).toContain('LOGIN');
  });

  it('form invalid when empty', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('email field validity', () => {
    let errors: any = {}; 
    const email = component.loginForm.controls['email'];
    // expect(email.valid).toBeFalsy();

    // errors = email.errors || {};
    // expect(errors['required']).toBeTruthy();

    // email.setValue('abc');
    // errors = email.errors || {};
    // expect(errors['required']).toBeFalsy();
    // expect(errors['email']).toBeTruthy();

    email.setValue('abc@gmail.com');
    errors = email.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['email']).toBeFalsy();
});

it('password field validity', () => {
    let errors: any = {}; 
    const password = component.loginForm.controls['password'];
    expect(password.valid).toBeFalsy();

    errors = password.errors || {};
    expect(errors['required']).toBeTruthy();

    password.setValue('123');
    errors = password.errors || {};
    expect(errors['required']).toBeFalsy();
});


});
