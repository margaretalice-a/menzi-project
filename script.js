var arr = ['TASK: You are the UX/UI designer at a startup that is creating a new educational app (competitors are Skillshare and Udemy). Create a high-fidelity digital prototype that demonstrates the flow of watching several lessons in a row that all have video and text content.', 
    'TASK: You are the UX/UI designer at a startup that is creating a new mobile grocery delivery app (Instacart is a competitor). Create a high-fidelity digital prototype that demonstrates the entire process of creating and submitting a grocery delivery: selecting a nearby store, adding food products to the cart, checking out, and choosing a delivery time.',
    'TASK: You were hired as a freelance UX/UI designer by a company making a new mobile maps app (competitors are Google Maps, Waze, and Apple Maps). Create a high-fidelity digital prototype of the new map app, which should screens for (1) the homepage (what users land on when they open up the app on their phones), (2) what searching for a new location looks like, and (3) the interface for giving the user real-time driving directions, (4) a detailed view of a specific location, and (5) what saving a location to a favorites list looks like.',
    'TASK: You are the UX/UI designer for a project management and team collaboration app. You can choose who this will be (examples include: monday.com, taskade.com, clickup.com, basecamp.com, getflow.com, and asana.com). Follow the design process to redesign a specific feature from your chosen app that new customers could find confusing or difficult to use.',
    'TASK: You are the UX/UI designer at a startup creating a new note-taking app (competitors are Notion and Evernote). Create a high-fidelity digital prototype that includes a feature(s) that is unique to the app'];

function briefFunction(){ 
    document.getElementById("demo").innerHTML= arr[Math.floor(Math.random()*arr.length)]
    document.getElementById("demo").style.border='2px solid white'
    }
    
function btnFunction() {
    var element = document.body; 
    element.classList.toggle("dark-mode");
}