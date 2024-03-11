<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

<script lang="ts">
  const number: number[] = [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,]

  const durationGlobal = 'duration-300'

  const buttonStyle: string = 'rounded-full px-5 py-2 active:scale-95 ' + durationGlobal + ' '
  const buttonPrimary: string = 'text-black bg-slate-100 hover:bg-slate-50 active:bg-slate-200'
  const buttonSecondary: string = 'text-white bg-slate-900 hover:bg-slate-950 active:bg-slate-800'

  const bottomMenu: string = 'p-5 text-center block bg-slate-900/0 hover:bg-slate-950/0 active:bg-slate-800/50 grow cursor-pointer ' + durationGlobal
</script>


<header class="fixed inset-0 p-5 backdrop-blur-md h-min flex justify-between">
  <span class="text-3xl">IMMICH</span>

  <div class="text-base">
    <button class={buttonStyle + buttonPrimary}><i class="fa-solid fa-plus"></i>Add</button>
    <button class={buttonStyle + buttonSecondary}><i class="fa-solid fa-circle-user"></i>User</button>
  </div>
</header>


<body class="mx-auto my-20 px-5 text-6xl">
  
  <h1>HELLO WORLD</h1>
  
  {#each number as element}
    <p>Printing letter {element} </p>
  {/each}
</body>

<footer class="fixed bottom-0 w-full backdrop-blur-md h-min flex">
  <div class={bottomMenu}>
    <i class="fa-solid fa-image"></i><br>Photos
  </div>
  <div class={bottomMenu}>
    <i class="fa-solid fa-magnifying-glass"></i><br>Search
  </div>
  <div class={bottomMenu}>
    <i class="fa-solid fa-user-group"></i><br>Sharing
  </div>
  <div class={bottomMenu}>
    <i class="fa-solid fa-book-bookmark"></i><br>Library
  </div>
</footer>