import React from "react"
import renderer from "react-test-renderer"
import TeamMembers from "../"
import TeamMember from "../team-member"

describe("TeamMember", () => {
  it("renders correctly", () => {
    const imgFixed = {
      base64:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAYCAYAAAD6S912AAAACXBIWXMAAAsSAAALEgHS3X78AAAEvUlEQVQ4y3WTf0xbVRTHH1QTkyW0/DAKBJaQyI9tsNLXFtq+Ika2ZCFbFpkGIpG5P8S4xc1pZuJEt8U5g26STZLpNgqU/WDQ8ltRMnSDVn5szmUaJYzhgmMwgQmlFPr67vGcx4Ngym5ycs+993s+93vvfY/jlLbgFDiwW+TcW2sOpb7vc+2auTrLdtEp3MQY9tVZXrlZlh62UkNNbBC4oIYFcj9z0SQLFxyWnD/K+SFosgK0YFDfbAWcG0HwVtJM1mTKWr/Dwq3a/E5BFgQahCwUwb2zRpi5ZBZxLAWcgjRbaxaHvzHIcKlR2KIYCQ12h5b9isPJiyYVim5BWxb8fopfQCAgkCGQIZDm/OQUNXd8DstTS6cLOvaSO1zMJAd+hxB4dMHM5usFJjqtclBOcwu4pkA3K7WqYIcOi0q5u4+hMxugIVMMOIwgUtQblDAymsM1P/yYTZuWyVfktKj+51AG1pvlHDqsL1/5zPTbn5UFIF3ZK/nad7P57/cABebAcG6gqgDaPzUPQav1zcGK51WPfenSd/KfoL4wL/f4cNtpkK5fFmddNczrPg8UlLMbdeJA01eQl5tTRdq3X3819Mt9m4IfZc5lW3QIEPrT2ZIeqc8OPpct4O2uYHPdFUBB+by7MoDz0Fj2bj9qZQOerqpghz53Fddy8oD8MDcuHKv299hh3l0lerttMOeqZBSYM5+7UpT6z0Of/aidtB+88VLI/M/Vq3+Hnq4KGTh99dxzWOxDCBBkJVDppcnOM8kra4IaOfT32rl/Ok6H0BgLr8HtOgKKBFbgIty6THkfaX6pOMz5e6q5OXcl99iGYHlHr8um9boqx8TeGgJIFGKvHXBuAsOwUnt3ZJUjG/R67tvyD+W8vfzgk9T/23HKPNX5Ncx22dgsHnPm6hmY/OGkldaay96XNcff2yXX7i3euQgyGgycTqeTc71eH4Lj5a/eNzVm9lx3wl9NJ6S7GNO9deB5OLL8nAaDXoUw+YqIQSy5ZWdZOZ7nl0GFhYXPhmvUHxW+tnMMwA+eLpvkuXaOQWAWcG5cow47nJ+fH7Okp1rBsvhjcILZzGm12pBFt3o1ujxiMBgmY2JiQBAsIDJgMDEEbHwAPztgZpMJoqOjAXVTGEfRYTjVbkSGKTOT41LT0kKU4+7gdbqRjIwMSEpKgoiICP/6DRukR+P3ofS2l33y6yybnhiH1NQ0KTIyUkxMTATS8rxuVK/nC4iB+kWXep7fbTQaaVcU8P6UlBQpLj4eYmNj2aXGZraj+Q5sbRiE2qYWlpCQwOLi4mDdunUSaTFAruX5/TIsI8O4BidHCYYXK5IAc4ZQptFooKT0BBS3D8Ku74bg0BdlEBkVBcm4RhrSUo1i5GGG0ajGo/I5CkzCYEuwaLzDcATuP1gC21vvwba2EThw6Aho1GpyDikKlGowAsRAl7n0QiVkmXaiRRwzfCSgIxOwqPgteLH5b3ih+T4U7dkHERo1xK9dC6RRHFIvEgP7YwRsxVelQWBJQLslJ6dAhDoMcvIKwNL0AIwNo7A5vwiiEJiEa8qpQDEhKcfuJ+AogciZYl/eOR37ZyLDYX32FtA3jEFq/QPYuGkbRD8dAdp03Up3TAnZ1H+RGyVg1GWGAQAAAABJRU5ErkJggg==",
      height: 50,
      src: "/static/a2a6b6825fdae081160b6dd6b4362ca6/66382/business.png",
      srcSet:
        "/static/a2a6b6825fdae081160b6dd6b4362ca6/66382/business.png 1x,↵/static/a2a6b6825fdae081160b6dd6b4362ca6/18a61/business.png 1.5x,↵/static/a2a6b6825fdae081160b6dd6b4362ca6/f52d2/business.png 2x,↵/static/a2a6b6825fdae081160b6dd6b4362ca6/4ffea/business.png 3x",
      width: 50,
    }
    const teamMembers = (
      <TeamMembers>
        <TeamMember name="Name" position="position" imgFixed={imgFixed}>
          Body
        </TeamMember>
      </TeamMembers>
    )

    const tree = renderer.create(teamMembers).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
