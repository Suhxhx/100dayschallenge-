// DAY-40

// 💡 Today’s Challenge - Design Twitter Feed 

// You are asked to design a simplified version of a Twitter feed system, where tweets are stored in a Doubly Linked List.

// 👉 Requirements:
// 1. Post Tweet (Insert at Head) → Every new tweet appears at the top of the feed.
// 2. Delete Oldest Tweet (Delete at Tail) → Remove the last tweet when feed gets too long.
// 3. Delete Tweet at Index → Delete a tweet at a given position (0-based).
// 4. Show Feed Forward → Print tweets from newest to oldest.
// 5. Show Feed Backward → Print tweets from oldest to newest.

// ⚡ Input Example
// PostTweet "Hello"  
// PostTweet "DSA Day 40"  
// PostTweet "Linked Lists are fun!"  
// ShowFeedForward  
// DeleteAtIndex 1  
// ShowFeedForward  
// DeleteOldest  
// ShowFeedForward  
// ShowFeedBackward  

// ✅ Expected Output

// Linked Lists are fun! → DSA Day 40 → Hello  
// Linked Lists are fun! → Hello  
// Linked Lists are fun! → Hello  
// Hello → Linked Lists are fun!  

// 💡 Hints:
// * Use DLL to allow quick insertion at head (new tweets on top).
// * Use DLL tail to delete the oldest tweet efficiently.
// * Carefully handle edge cases when deleting head, tail, or invalid positions.

class TweetNode {
  constructor(content) {
    this.content = content;
    this.next = null;
    this.prev = null;
  }
}
class TwitterFeed {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }


  postTweet(content) {
    const newTweet = new TweetNode(content);
    if (!this.head) {
      this.head = this.tail = newTweet;
    } else {
      newTweet.next = this.head;
      this.head.prev = newTweet;
      this.head = newTweet;
    }
    this.size++;
  }

 
  deleteOldest() {
    if (!this.tail) return; // Empty feed
    if (this.head === this.tail) { // Only one tweet
      this.head = this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.size--;
  }

  deleteAtIndex(index) {
    if (index < 0 || index >= this.size) return; // Invalid index
    if (index === 0) { // Delete head
      this.head = this.head.next;
      if (this.head) this.head.prev = null;
      else this.tail = null;
    } else if (index === this.size - 1) { // Delete tail
      this.deleteOldest();
      return;
    } else { // Delete in middle
      let current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
      current.prev.next = current.next;
      current.next.prev = current.prev;
    }
    this.size--;
  }


  showFeedForward() {
    let result = [];
    let current = this.head;
    while (current) {
      result.push(current.content);
      current = current.next;
    }
    console.log(result.join(" → "));
  }

  showFeedBackward() {
    let result = [];
    let current = this.tail;
    while (current) {
      result.push(current.content);
      current = current.prev;
    }
    console.log(result.join(" → "));
  }
}
const feed = new TwitterFeed();

feed.postTweet("Hello");
feed.postTweet("DSA Day 40");
feed.postTweet("Linked Lists are fun!");
feed.showFeedForward();       // Linked Lists are fun! → DSA Day 40 → Hello
feed.deleteAtIndex(1);
feed.showFeedForward();       // Linked Lists are fun! → Hello
feed.deleteOldest();
feed.showFeedForward();       // Linked Lists are fun! → Hello
feed.showFeedBackward();      // Hello → Linked Lists are fun!

