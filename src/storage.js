// localStorage puede fallar (modo privado, cookies bloqueadas): nunca debe romper la página
export function load(key) {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}

export function save(key, value) {
  try {
    localStorage.setItem(key, value)
  } catch {
    /* sin persistencia, la página sigue funcionando */
  }
}
