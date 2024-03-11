<script lang="ts">
  let firstname = "";
  let lastname = "";
  let exclamation: string[] = ["", ""];
  let applyClass = false;

  $: if (firstname || lastname) {
    exclamation = [", ", " ", "!"];
  } else {
    exclamation = ["", "", "."];
  }

  function greet() {
    const now = new Date();
    const hour = now.getHours();

    if (hour >=  0 && hour <  12) {
      return "Good Morning";
    } else if (hour >=  12 && hour <  18) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  }


</script>

<main class="{applyClass ? 'swipeLeft' : ''}">

  <!-- To actually call a function, do function(). 
  Calling with no parentheses svelte will treat it like calling a variable -->
  <h1>{greet()}{exclamation[0]}{firstname}{exclamation[1]}{lastname}{exclamation[2]}</h1>
  <p class="anim1">Please fill in the details below.</p>







  <form>

    <!-- Grid -->
    <div class="grid">
  
      <!-- Markup example 1: input is inside label -->
      <label for="firstname">
        First name
        <input type="text" id="firstname" name="firstname" placeholder="First name" required bind:value={firstname}>
      </label>
  
      <label for="lastname">
        Last name
        <input type="text" id="lastname" name="lastname" placeholder="Last name" required bind:value={lastname}>
      </label>
  
    </div>
  
    <!-- Markup example 2: input is after label -->
    <label for="email">Email address</label>
    <input type="email" id="email" name="email" placeholder="Email address" required>
    <small>We'll never share your email with anyone else.</small>
    
    <fieldset>
      <label for="terms">
        <input type="checkbox" id="terms" name="terms" required>
        I agree to the Terms and Conditions
      </label>
    </fieldset>

    <!-- Button -->
    <button>Submit</button>
    <!-- type="submit" -->
  </form>





</main>


