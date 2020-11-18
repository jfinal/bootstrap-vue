import { defineComponent, h, mergeData } from '../../vue'
import { NAME_DROPDOWN_HEADER } from '../../constants/components'
import { makePropsConfigurable } from '../../utils/config'

// --- Props ---

export const props = makePropsConfigurable(
  {
    id: {
      type: String
      // default: null
    },
    tag: {
      type: String,
      default: 'header'
    },
    variant: {
      type: String
      // default: null
    }
  },
  NAME_DROPDOWN_HEADER
)

// --- Main component ---

// @vue/component
export const BDropdownHeader = /*#__PURE__*/ defineComponent({
  name: NAME_DROPDOWN_HEADER,
  functional: true,
  props,
  render(_, { props, data, children }) {
    const $attrs = data.attrs || {}
    data.attrs = {}
    return h('li', mergeData(data, { attrs: { role: 'presentation' } }), [
      h(
        props.tag,
        {
          staticClass: 'dropdown-header',
          class: {
            [`text-${props.variant}`]: props.variant
          },
          attrs: {
            ...$attrs,
            id: props.id || null,
            role: 'heading'
          },
          ref: 'header'
        },
        children
      )
    ])
  }
})
