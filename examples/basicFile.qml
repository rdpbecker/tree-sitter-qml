import QtQuick 2.9
import "qrc:/myFile"
import "qrc:/myFile/mySub"
import "qrc:/myFile/sub.js"
import "qrc:/myFile" as File

Component {
    id: component
    property var myTextVar
    property color my_colour: "red"
    textNameWidth: 3
    signal xY()
    function xY() {
        return popup_item
    }
}
