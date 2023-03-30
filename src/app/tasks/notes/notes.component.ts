import { Component, OnDestroy, OnInit } from '@angular/core';

interface DataState {
  id: number;
  content: string;
}

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent implements OnInit, OnDestroy {
  myNotes: DataState[] = [];

  constructor() {
    window.addEventListener('beforeunload', (e) => {
      this.storeNotesInLocalStorage();
    });
  }

  ngOnInit(): void {
    const dataJSON = localStorage.getItem('notes');
    if (dataJSON) {
      this.myNotes = JSON.parse(dataJSON);
    }
  }

  addNote() {
    const signleNote: DataState = {
      id: Math.floor(Math.random() * 100000),
      content: '',
    };

    this.myNotes.push(signleNote);
  }

  onRemove(noteId: number) {
    if (confirm('Do you want to delete this note?')) {
      const filteredNotes = this.myNotes.filter((note) => note.id !== noteId);
      this.myNotes = filteredNotes;
    }
  }

  storeNotesInLocalStorage() {
    if (this.myNotes.length) {
      localStorage.setItem('notes', JSON.stringify(this.myNotes));
    } else localStorage.removeItem('notes');
  }

  ngOnDestroy(): void {
    this.storeNotesInLocalStorage();
  }
}
