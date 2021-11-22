function showObjProperties(Obj)
  { var msg;
      for (var prop in Obj)
        { msg = prop + "= " + Obj[prop];
          document.write(msg + "<br>")
         }
  }
