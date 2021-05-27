import { connect } from "react-redux"
import { setFilterAction } from "../store/filterActions"
import { filterSelector } from "../store/filterSelector"

export function TodoFilter({value, onChange}) {
          return <div>
                    <button disabled={value === null} onClick={() => onChange(null)}>Aucun filtre</button>
                    <button disabled={value === true} onClick={() => onChange(true)}>completed</button>
                    <button disabled={value === false} onClick={() => onChange(false)}>A faire</button>
          </div>
}

export const TodoFilterStore = connect(
          state => ({
                    value: filterSelector(state)
          }),
          dispatch => ({
                    onChange: (value) => dispatch(setFilterAction(value))
          })
)(TodoFilter)