
import {
  matFormatBold,
  matFormatItalic,
  matStrikethroughS,
  matFormatUnderlined,
  matFormatListBulleted,
  matFormatListNumbered,
  matVerticalAlignBottom,
  matVerticalAlignTop,
  matFormatAlignLeft,
  matFormatAlignCenter,
  matFormatAlignRight,
  matFormatAlignJustify,
  matFormatIndentDecrease,
  matFormatIndentIncrease,
  matFormatClear,
  matTextFormat,
  matFormatSize,
  matRemove,
  matFontDownload
} from '@quasar/extras/material-icons'

import {
  ionCheckmark,
  ionAlert,
  ionInformationCircleOutline,
  ionArrowUp,
  ionArrowForward,
  ionArrowDown,
  ionArrowBack,
  ionCaretDownOutline,
  ionAperture,
  ionOptions,
  ionApps,
  ionRefresh,
  ionSquare,
  ionCloseCircle,
  ionTime,
  ionCalendar,
  ionLink,
  ionExpand,
  ionChatboxEllipses,
  ionPrint,
  ionArrowUndo,
  ionArrowRedo,
  ionCodeSlash,
  ionAdd,
  ionClose,
  ionPlaySkipBackCircle,
  ionPlaySkipForwardCircle,
  ionStar,
  ionCreate,
  ionWarning,
  ionPlay,
  ionAddCircle,
  ionCloudUpload,
  ionTrash,
  ionCheckmarkDone,
  ionChevronDown,
  ionChevronUp,
  ionChevronBack,
  ionChevronForward,
  ionChevronBackCircle,
  ionChevronForwardCircle
} from '@quasar/extras/ionicons-v5'

export default {
  name: 'svg-ionicons-v5',
  type: {
    positive: ionCheckmark,
    negative: ionAlert,
    info: ionInformationCircleOutline,
    warning: ionAlert
  },
  arrow: {
    up: ionArrowUp,
    right: ionArrowForward,
    down: ionArrowDown,
    left: ionArrowBack,
    dropdown: ionCaretDownOutline
  },
  chevron: {
    left: ionArrowBack,
    right: ionArrowForward
  },
  colorPicker: {
    spectrum: ionAperture,
    tune: ionOptions,
    palette: ionApps
  },
  pullToRefresh: {
    icon: ionRefresh
  },
  carousel: {
    left: ionChevronBack,
    right: ionChevronForward,
    up: ionChevronUp,
    down: ionChevronDown,
    navigationIcon: ionSquare
  },
  chip: {
    remove: ionCloseCircle,
    selected: ionCheckmark
  },
  datetime: {
    arrowLeft: ionChevronBack,
    arrowRight: ionChevronForward,
    now: ionTime,
    today: ionCalendar
  },
  editor: { // requires Material icons for some as Ionicons simply does not have everything needed
    bold: matFormatBold,
    italic: matFormatItalic,
    strikethrough: matStrikethroughS,
    underline: matFormatUnderlined,
    unorderedList: matFormatListBulleted,
    orderedList: matFormatListNumbered,
    subscript: matVerticalAlignBottom,
    superscript: matVerticalAlignTop,
    hyperlink: ionLink,
    toggleFullscreen: ionExpand,
    quote: ionChatboxEllipses,
    left: matFormatAlignLeft,
    center: matFormatAlignCenter,
    right: matFormatAlignRight,
    justify: matFormatAlignJustify,
    print: ionPrint,
    outdent: matFormatIndentDecrease,
    indent: matFormatIndentIncrease,
    removeFormat: matFormatClear,
    formatting: matTextFormat,
    fontSize: matFormatSize,
    align: matFormatAlignLeft,
    hr: matRemove,
    undo: ionArrowUndo,
    redo: ionArrowRedo,
    heading: matFormatSize,
    code: ionCodeSlash,
    size: matFormatSize,
    font: matFontDownload,
    viewSource: ionCodeSlash
  },
  expansionItem: {
    icon: ionCaretDownOutline,
    denseIcon: ionCaretDownOutline
  },
  fab: {
    icon: ionAdd,
    activeIcon: ionClose
  },
  field: {
    clear: ionCloseCircle,
    error: ionAlert
  },
  pagination: {
    first: ionPlaySkipBackCircle,
    prev: ionChevronBackCircle,
    next: ionChevronForwardCircle,
    last: ionPlaySkipForwardCircle
  },
  rating: {
    icon: ionStar
  },
  stepper: {
    done: ionCheckmark,
    active: ionCreate,
    error: ionWarning
  },
  tabs: {
    left: ionChevronBack,
    right: ionChevronForward,
    up: ionChevronUp,
    down: ionChevronDown
  },
  table: {
    arrowUp: ionArrowUp,
    warning: ionWarning,
    firstPage: ionPlaySkipBackCircle,
    prevPage: ionChevronBackCircle,
    nextPage: ionChevronForwardCircle,
    lastPage: ionPlaySkipForwardCircle
  },
  tree: {
    icon: ionPlay
  },
  uploader: {
    done: ionCheckmark,
    clear: ionClose,
    add: ionAddCircle,
    upload: ionCloudUpload,
    removeQueue: ionTrash,
    removeUploaded: ionCheckmarkDone
  }
}
