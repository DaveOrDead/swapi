/**
 * To keep things consistent and to reduce the cognitive load of
 * having to come up with names for state hooks we should try to stick to this set list of common
 * names.
 * @type {Object}
 */
const STATE_HOOKS = Object.freeze({
    hasCustomPositioningContext: "has-custom-positioning-context",
    hasLoaded: "has-loaded",
    isActive: "is-active",
    isCollapsed: "is-collapsed",
    isDialogOpen: "is-dialog-open",
    isDirty: "is-dirty",
    isDisabled: "is-disabled",
    isExpanded: "is-expanded",
    isInvalid: "is-invalid",
    isLoading: "is-loading",
    isMouseOver: "is-mouseover",
    isSorted: "is-sorted",
    isVisible: "is-visible"
});

export default STATE_HOOKS;
