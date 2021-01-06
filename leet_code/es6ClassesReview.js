// Write a class called Point, which represents a point in two-dimensional space. 
//A point has x and y properties, given as arguments to its constructor.

// It also has a single method plus, which takes another point and returns the sum of the two points, 
//that is, a new point whose x is the sum of the x properties of the two original points, and whose y is the sum of their y properties.

// Your code here
class Point {
    constructor(x, y){
        this.x = x
      this.y = y
    }
    
   plus(point) {
         let newX = this.x + point.x
      let newY = this.y + point.y
       return new Point(newX, newY)
   }
    
  }
  
  console.log(new Point(1, 2).plus(new Point(2, 1)))
  // → Point{x: 3, y: 3}



//   function Speaker(name, verb) {
//     this.name = name
//     this.verb = verb || "says"
//   }new
//   Speaker.prototype.speak = function(text) {
//     console.log(this.name + " " + this.verb + " '" + text + "'")
//   }
  
//   function Shouter(name) {
//     Speaker.call(this, name, "shouts")
//   }
//   Shouter.prototype = Object.create(Speaker.prototype)
//   Shouter.prototype.speak = function(text) {
//     Speaker.prototype.speak.call(this, text.toUpperCase())
//   }
  
//   new Shouter("Dr. Loudmouth").speak("hello there")

class Speaker {
	constructor(name, verb){
		 this.name = name
         this.verb = verb
    }
	
  speak(text){
    console.log(this.name + " " + this.verb + " '" + text + "'")
  }
}

class Shouter extends Speaker {

	speak(text){
    	console.log((this.name + " " + this.verb + " '" + text + "'").toUpperCase())
    }
  	
}

new Shouter("Dr. Loudmouth").speak("hello there")