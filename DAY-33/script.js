// DAY-33


// 💡 Today’s Challenge – Task Manager with Singly Linked List

// Imagine you’re building a Task Manager App where tasks are stored in a Singly Linked List.

// 👉 Requirements:
// 1. Add Task at End → Insert a new task at the end of the list.
// 2. Add Task at Beginning → Insert a new task at the start of the list.
//    3. Delete Task by Name → Remove the first occurrence of a task by its name.
//    4. Delete Task by Position → Remove a task at a specific position (1-based index).
// 5. Show Tasks → Print the current list of tasks.

// Input Example

// AddTask “Finish Homework” at end  
// AddTask “Buy Groceries” at end  
// AddTask “Morning Workout” at beginning  
// DeleteTask “Buy Groceries”  
// DeleteTask at position 2  
// ShowTasks

//  Expected Output

// Morning Workout → Finish Homework → Buy Groceries  
// Morning Workout → Finish Homework  
// Finish Homework

class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    addTaskAtEnd(data) {
        const newNode = new Node(data)
        if (this.head === null) {
            this.head = newNode
        } else {
            let temp = this.head
            while (temp.next !== null) {
                temp = temp.next;
            }
            temp.next = newNode;
        }
    }
    addTaskAtBeginning(data) {
        const newNode = new Node(data)
        newNode.next = this.head
        this.head = newNode
    }
    deleteTaskByName(data) {
        if (this.head === null) return;
        if (this.head.data === data) {
            this.head = this.head.next
            return;
        }
        let temp = this.head
        while(temp.next !== null && temp.next.data !== data){
            temp = temp.next;
        }
        if(temp.next !== null){
            temp.next = temp.next.next;
        }
    }
    deleteTaskByPosition(data){
        if(this.head === null) return;
        if(data === 1){
            this.head = this.head.next;
            return;
        }
        let temp = this.head;
        let count = 1;
        while(temp !== null && count < data - 1){
            temp = temp.next;
            count++
        }
        if(temp !== null && temp.next !== null){
            temp.next = temp.next.next;
        }
    }
    showTasks(){
        if(this.head == null){
            console.log("No tasks available")
            return;
        }
         let temp = this.head;
        let result = "";
        while (temp !== null) {
            result += temp.data;
            if (temp.next !== null) result += " → ";
            temp = temp.next;
        }
        console.log(result);
    }
}
const task = new LinkedList();

task.addTaskAtEnd("Finish Homework");       
task.addTaskAtEnd("Buy Groceries");        
task.addTaskAtBeginning("Morning Workout"); 
task.showTasks();
task.deleteTaskByName("Buy Groceries");   
task.showTasks();  
task.deleteTaskByPosition(2);   
task.showTasks();  

//output
// Morning Workout → Finish Homework → Buy Groceries
// Morning Workout → Finish Homework
// Morning Workout
   