const form=document.querySelector('form')

//if you write outside the form, it will result in variable holding empty values as soon as the page loads
//const height=parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function(e){
  e.preventDefault()
  //The e.preventDefault() function is used in this code to prevent the default behavior of the form submission when the submit button is clicked. By default, when a form is submitted, the browser reloads the page or navigates to a new page specified in the form's action attribute. However, in this case, the JavaScript code wants to handle the form submission itself, calculate the BMI, and display the result on the page without reloading or navigating to a new page.

// Therefore, e.preventDefault() is called to prevent the default form submission behavior, allowing the JavaScript code to handle the form submission event and execute the BMI calculation logic. This ensures that the form data is processed as intended by the JavaScript code without triggering the default browser behavior.
  
  const height=parseInt(document.querySelector('#height').value)
  
  const weight=parseInt(document.querySelector('#weight').value)
  
  const result=document.querySelector('#results')
  
  if(height===''||height<0 || isNaN(height)){
    result.innerHTML="Please give a valid height"
  }
  
   else if(weight===''||weight<0 || isNaN(weight)){
    result.innerHTML="Please give a valid weight"
  }
  else{
    const bmi=(weight/((height*height)/10000)).toFixed(2)
    
    //show the result
    result.innerHTML=`<span>${bmi}</span>`
  }
})


// The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.

// For example, this can be useful when:

// Clicking on a "Submit" button, prevent it from submitting a form
// Clicking on a link, prevent the link from following the URL
// Note: Not all events are cancelable. Use the cancelable property to find out if an event is cancelable.

// Note: The preventDefault() method does not prevent further propagation of an event through the DOM. Use the stopPropagation() method to handle this.
