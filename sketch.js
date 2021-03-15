const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Body= Matter.Body;
const Render= Matter.Render;
const Constraint= Matter.Constraint;




var engine, world;
var launcher;
var block1;
var polygon;

function preload(){


}
function setup(){

    var canvas= createCanvas(1200, 400);
    engine= Engine.create();
    world= engine.world;
}
function draw(){

    polygon= new Polygon(200, 200, 30, 30);
    launcher= new Launcher(polygon.body, {x: 200, y: 20});
    block1= new Blocks(200, 200);


}