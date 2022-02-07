import { writable } from "svelte/store";

export const todos = writable([{id:0,message:"test1",completed:false},{id:1,message:"example2",completed:false}]);