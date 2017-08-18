const headers = [
  { key: 'seq', label: 'seq' },
  { key: 'Status', label: 'Status' },
  { key: 'Category', label: 'Category' },
  { key: 'Title', label: 'Title' },
  { key: 'Owner', label: 'Owner' },
  { key: 'Priority', label: 'Priority' },
  { key: 'Action', label: 'Action' }
];

const issues = [
  { seq: 1, Status: 'Open', Category: 'cat1', Title: 'Java', Owner: 'Allen', Priority: '1' },
  { seq: 2, Status: 'Close', Category: 'cat1', Title: 'Go crazy', Owner: 'Nick', Priority: '2' },
  { seq: 3, Status: 'Close', Category: 'cat3', Title: 'Wandering', Owner: 'Jocelyn', Priority: '3' },
  { seq: 4, Status: 'Open', Category: 'cat1', Title: 'Big belly', Owner: 'Haku', Priority: '4' }
];

const defaultIssues = [
  { seq: 1, Status: 'Open', Category: 'cat1', Title: 'title1', Owner: 'Allen', Priority: '1' }
];

const deleteIssue1 = [
  { seq: 1, Status: 'Open', Category: 'cat1', Title: 'Java', Owner: 'Allen', Priority: '1' },
  { seq: 3, Status: 'Close', Category: 'cat3', Title: 'Wandering', Owner: 'Jocelyn', Priority: '3' },
  { seq: 4, Status: 'Open', Category: 'cat1', Title: 'Big belly', Owner: 'Haku', Priority: '4' }
];

module.exports = {
  headers,
  issues,
  defaultIssues,
  deleteIssue1
};