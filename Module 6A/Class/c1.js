

class animal{
    speak(){
        console.log("animal speaks");
    }
}

class dog extends animal{
    bark(){
        console.log("dog barks");
    }
}

const d = new dog();
d.speak();
d.bark();