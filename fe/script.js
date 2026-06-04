    async function signupbutton(){
        const email = document.getElementById("signup-email").value ;
        const password = document.getElementById("signup-password").value;
        const name = document.getElementById("signup-name").value ;
        try{
        const response = await axios.post("http://localhost:3000/signup", {
            email : email , 
            password : password,
            name : name
        });
        alert(response.data.msg);
        }catch(e){
            alert(e.response.data.msg)
        }
    }

    async function signinbutton(){
        try{
        const email = document.getElementById("signin-email").value ;
        const password = document.getElementById("signin-password").value;

        const response = await axios.post("http://localhost:3000/signin",{
            email : email , 
            password : password
        });

        localStorage.setItem("token", response.data.token)
        alert(response.data.msg)
        }
        catch(e){
            alert(e.response.data.msg)
        }
    }
    function logoutbutton(){
        localStorage.removeItem("token")
        alert("Logged out !")
    }

     function showSignin() {
      document.getElementById('signup-view').classList.add('hidden');
      document.getElementById('signin-view').classList.remove('hidden');
    }
    function showSignup() {
      document.getElementById('signin-view').classList.add('hidden');
      document.getElementById('signup-view').classList.remove('hidden');
    }
