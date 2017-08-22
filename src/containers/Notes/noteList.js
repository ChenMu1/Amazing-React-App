import React, { Component } from 'react';
import { timeDifference } from '../../helpers/utility';
import Button from '../../components/uielements/button';
import Input from '../../components/uielements/input';

const Search = Input.Search;

function filterNotes(notes, search) {
  search = search.toUpperCase();
  if (search) {
    return notes.filter(note => note.note.toUpperCase().includes(search));
  }
  return notes;
}
export default class noteList extends Component {
  constructor(props) {
    super(props);
    this.singleNote = this.singleNote.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {
      search: '',
    };
  }
  singleNote(note) {
    const { selectedId, deleteNote, changeNote, colors } = this.props;

    const activeClass = selectedId === note.id ? 'active' : '';
    const onChange = () => changeNote(note.id);
    const onDelete = () => deleteNote(note.id);
    return (
      <div className={`isoList ${activeClass}`} key={note.id}>
        <div
          className="isoNoteBGColor"
          style={{ width: '5px', background: colors[note.color] }}
        />
        <div className="isoNoteText" onClick={onChange}>
          <h3>{note.note}</h3>
          <span className="isoNoteCreatedDate">
            {timeDifference(note.createTime)}
          </span>
        </div>
        <Button
          className="isoDeleteBtn"
          icon="close"
          type="button"
          onClick={onDelete}
        />
      </div>
    );
  }
  onChange(event) {
    this.setState({ search: event.target.value });
  }
  render() {
    const { search } = this.state;
    const notes = filterNotes(this.props.notes, search);
    return (
      <div className="isoNoteListWrapper">
        <Search
          placeholder="Search Notes"
          className="isoSearchNotes"
          value={search}
          onChange={this.onChange}
        />
        <div className="isoNoteList">
          {notes && notes.length > 0
            ? notes.map(note => this.singleNote(note))
            : <span className="isoNotlistNotice">No note found</span>}
        </div>
      </div>
    );
  }
}
