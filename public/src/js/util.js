var dbPromise = idb.open('post-store',1,function(db){
    if(!db.objectStoreNames.contains('posts')) {
      db.createObjectStore('posts',{keyPath: 'id'})
    }
  })

function writeData(st,data) {
    dbPromise.then(function(db) {
        var tx = db.transaction(st,'readwrite');
        var store = tx.objectStore(st)
        store.put(data)
        return tx.complate();
      })
}