import React, { Component } from 'react';
import { Layout } from 'antd';
import { connect } from 'react-redux';
import noteActions from '../../redux/notes/actions';
import NoteList from './noteList';
import { ColorChoser } from '../../components/';
import Button from '../../components/uielements/button';

const {
  changeNote,
  addNote,
  editNote,
  deleteNote,
  changeColor,
} = noteActions;
const { Header, Sider, Content } = Layout;
class Notes extends Component {
  constructor(props) {
    super(props);
    this.updateNote = this.updateNote.bind(this);
  }
  updateNote(event) {
    const { editNote, selectedId } = this.props;
    editNote(selectedId, event.target.value);
  }
  render() {
    const {
      notes,
      selectedId,
      changeNote,
      deleteNote,
      addNote,
      colors,
      seectedColor,
      changeColor,
    } = this.props;
    const selectedNote = selectedId !== undefined
      ? notes.filter(note => note.id === selectedId)[0]
      : null;
    return (
      <Layout className="isomorphicNoteComponent">
        <Sider width="340" className="isoNoteListSidebar">
          <NoteList
            notes={notes}
            selectedId={selectedId}
            changeNote={changeNote}
            deleteNote={deleteNote}
            colors={colors}
          />
        </Sider>
        <Layout className="isoNotepadWrapper">
          <Header className="isoHeader">
            {selectedId !== undefined
              ? <div className="isoColorChooseWrapper">
                  <ColorChoser
                    colors={colors}
                    changeColor={changeColor}
                    seectedColor={seectedColor}
                  />
                  {' '}
                  <span>Choose a color for your note</span>
                </div>
              : ''}
            <Button type="primary" className="isoAddNoteBtn" onClick={addNote}>
              Add New Note
            </Button>
          </Header>
          <Content className="isoNoteEditingArea">
            {selectedId !== undefined
              ? <textarea
                  className="isoNoteTextbox"
                  value={selectedNote.note}
                  onChange={this.updateNote}
                  autoFocus
                />
              : ''}
            {/*{selectedId !== undefined ? <span>{`created at ${selectedNote.createTime}`}</span> : ''}*/
            }
          </Content>
        </Layout>
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  const { notes, selectedId, colors, seectedColor } = state.Notes.toJS();
  return {
    notes,
    selectedId,
    colors,
    seectedColor,
  };
}
export default connect(mapStateToProps, {
  addNote,
  editNote,
  deleteNote,
  changeNote,
  changeColor,
})(Notes);
