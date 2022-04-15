package main

import (
  "encoding/json"
  "net/http"
  "log"
)

func main() {
  http.HandleFunc("/api/", handleAPI)

  publicserver := http.FileServer(http.Dir("./public"))
  http.Handle("/", publicserver)

  stylesserver := http.FileServer(http.Dir("./styles"))
  http.Handle("/styles/", http.StripPrefix("/styles/", stylesserver))

  scriptsserver := http.FileServer(http.Dir("./scripts"))
  http.Handle("/scripts/", http.StripPrefix("/scripts/",  scriptsserver))

  log.Println("Listening on :8080....")
  err := http.ListenAndServe(":8080", nil)
  if err != nil {
    log.Fatal(err)
  }
}

func handleAPI(w http.ResponseWriter, r *http.Request) {
  values := []string{"O6ZoHdFg_Bs", "VmM3EH5nrDg", "nK-Vx8Sf-2E"}
	type Videos struct {
		VideoIDs []string
	}

	vidid := Videos{
		VideoIDs: values}

  w.Header().Set("Content-Type", "application/json")
  w.WriteHeader(http.StatusCreated)
  json.NewEncoder(w).Encode(vidid)
}
