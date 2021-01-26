// frank poth 2/28/2018

/* This is a fixed time step game loop. It can be used for any game and will ensure
that game state is updated at the same rate across different devices which is important
for uniform gameplay. Imagine playing your favorit game on a new phone and suddenly
it's running at a different speed. That would be a bad user experience, so we fix
it with a fixed step game loop. In addition, you can do things like frame dropping
and interpolation with a fixed step loop. which allow your game to play and look
smooth on slower devices rather than freezing or lagging to the point of unplayability */

const Engine = function(time_step, update, render) {
    this.animation_frame_request = undefined,// reference to the AFR
    this.time = undefined,// The most recent timestamp of loop execution
    this.time_step = time_step,// 1000/30 = 30 frames per second

    this.updated = false;// Whether or not the update function has been called since the last...

    this.update = update;// The update function
    this.render = render;// The render function
}





