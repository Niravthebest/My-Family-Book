var images = ["https://previews.123rf.com/images/jemastock/jemastock1911/jemastock191114509/133603337-ni%C3%B1o-de-dibujos-animados-icono-de-pie-sobre-fondo-blanco-ilustraci%C3%B3n-vectorial.jpg","https://i.postimg.cc/wjMnFtMX/father.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg" , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV9u0a4w2BBsbmswIOM8tI0VnO1OqoCg4egg&usqp=CAU", "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/MKdhy06Z/family.jpg"];



var names = ["Vivan Sanubala - Younger Son","Kiran Sanubala - Father", "Anita Kumari - Mother", "Sharath Chandra - Uncle", "Nirav Sanubala - Older Son",  "Family Book"];

var age = [32,47,40,11,8,0]

/*

We must sort the elements present inside the array "age" to print the age value of the family member for the respective family member.

Write: "age.sort()"

*/

age.sort();
console.log(age)


/*

We must reverse the elements present inside the array "age" to print the age value of the family member for the respective family member.
After sorting the array "age", all the elements must be arranged in an ascending manner and our family book consists of the exact opposite list i.e. all the first member is Grandfather followed by father and so on ie. in the decending manner.

Write: "age.reverse()"

*/
age.reverse();

var i = 0;

var numbers_of_family_member_in_array = 5

function update()
{
    i++;

    if(i > numbers_of_family_member_in_array )
    {
        i = 0;
    }
    
    var updatedImage = images[i];

    var updatedName  = names[i];
    
    var updatedAge = age[i]

    document.getElementById("family_member_image").src = updatedImage;
    
    document.getElementById("family_member_name").innerHTML = updatedName;

    document.getElementById("family_member_age").innerHTML = updatedAge;

    /*

    To find the maximum age value amongst the family members, we need to use the Math, and the max function together and to display the maximum age, we need print the value. Thus make use of console.

    Write:  "var max_number = Math.max.apply(Math, age)
            "console.log("The highest age is: ", max_number)"

    */

    var max_number = Math.max.apply(Math, age);
    console.log("The highest age is: ", max_number);

    /*

    To find the minimum age value amongst the family members, we need to use the Math, and the min function together and to display the maximum age, we need print the value. Thus make use of console.

    Write:  "var min_number = Math.min.apply(Math, age)
            "console.log("The lowest age is: ", min_number)"

    */

    var min_number = Math.min.apply(Math, age);
    console.log("The lowest age is: ", min_number);
}