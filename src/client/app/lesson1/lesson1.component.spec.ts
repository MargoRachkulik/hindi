import { Component } from '@angular/core';
import {
  async,
  TestBed
} from '@angular/core/testing';

import { Lesson1Module } from './lesson1.module';

export function main() {
   describe('Lesson1 component', () => {
    // Setting module for testing
    // Disable old forms

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [Lesson1Module]
      });
    });

    it('should work',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(TestComponent);
            let lesson1DOMEl = fixture.debugElement.children[0].nativeElement;

              expect(lesson1DOMEl.querySelectorAll('h2')[0].textContent).toEqual('Features');
          });
        }));
    });
}

@Component({
  selector: 'test-cmp',
  template: '<sd-about></sd-about>'
})
class TestComponent {}
