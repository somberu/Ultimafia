const Card = require("../../Card");
const { PRIORITY_CONVERT_DEFAULT } = require("../../const/Priority");

module.exports = class ConvertToCultists extends Card {
  constructor(role) {
    super(role);

    this.meetings = {
      Cultists: {
        actionName: "Convert",
        states: ["Night"],
        flags: ["voting"],
        targets: { include: ["alive"], exclude: ["self"] },
        action: {
          labels: ["convert", "cultist"],
          priority: PRIORITY_CONVERT_DEFAULT,
          run: function () {
            if (this.dominates())
              this.target.setRole(
                "Cultist",
                null,
                false,
                false,
                false,
                this.actor.faction
              );
          },
        },
      },
    };
  }
};
