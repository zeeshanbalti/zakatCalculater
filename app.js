 function abc() {
    var num1 = document.getElementById("input1")
    var res1 = +(num1.value);
    var change1 = res1 * 191633;
    
    // console.log(res1)
    var num2 = document.getElementById("input2")
    var res2 = +(num2.value);
    var change2 = res2 * 2521;
    
    var num3 = document.getElementById("input3")
    var res3 = +(num3.value);
     
    var result1 = change1 + change2 + res3
    var result = Math.round(result1)
    // console.log(result)
 

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Your 2023 Total Income is = ' + result,
        text: "And your Zakat is = " + (Math.round(result / 40)),
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, Donate!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Donate!',
            'Please Visti Saylani Website To donate your Zakat.',
            'success'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your Zakat is safe :)',
            'error'
          )
        }
      })
}
 

